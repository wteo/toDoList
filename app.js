const days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

function getRow() {
	const body = document.createElement("body");
	for (let day of days) {
			const tr = document.createElement("tr");
			tr.innerHTML = "<td>" + day + "</td>" + "<input type='text'>";
			tr.addEventListener("input", () => {});
			body.append(tr);
		}
	return body;
}

const table = document.querySelector("table");
table.append(getRow());


