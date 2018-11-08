const dataset = require("./clean_dataset.json");
const fs = require("fs");

const provincesMap = {
	"Chiang Mai": 1,
	"Suphan Buri": 2,
	Kanchanaburi: 3,
	"Nakhon Pathom": 4,
	Bangkok: 5
};

let tmpDataset = [];
dataset.forEach(json => {
	const province = json["province"];

	for (const key in json) {
		if (key !== "province") {
			tmpDataset.push({
				province: parseInt(provincesMap[province]),
				averageSalary: parseInt(json[key]),
				year: parseInt(key)
			});
		}
	}
});

fs.writeFileSync("./format_clean_dataset.json", JSON.stringify(tmpDataset));
