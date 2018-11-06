import rp from "request-promise-native";
import { parseString } from "xml2js";

const API_URL = "https://hpxml.pdc.org/public.xml";

export function _parsePDCXML(xmlString) {
	if (!xmlString) {
		return Promise.reject("invalid parameter");
	}
	return new Promise((resolve, reject) => {
		parseString(xmlString, function(err, data) {
			if (err) {
				return reject(err);
			}
			return resolve(data.hazardBeans.hazardBean);
		});
	});
}

export function _mapPDCToModel(pdcData) {
	const {
		uuid: pdc_id,
		hazard_Name: title,
		longitude,
		latitude,
		severity_ID: severity,
		description,
		snc_url: source,
		update_Date: time
	} = pdcData;

	return {
		pdc_id,
		title,
		loc: {
			type: "Point",
			coordinates: [parseFloat(longitude), parseFloat(latitude)]
		},
		severity,
		description,
		source,
		time
	};
}

export async function fetchPDC() {
	const XMLDataString = await rp(API_URL);
	const XMLDatas = await _parsePDCXML(XMLDataString);

	let resultList = XMLDatas.map(XMLData => {
		return _mapPDCToModel(XMLData);
	});
	// if (mongoose) {
	// 	resultList = resultList.map(result => new PDC(result));
	// }
	return resultList;
}
