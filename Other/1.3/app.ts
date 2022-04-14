interface IFormatter {
	(data: string, toUpper: boolean): string;
}

var uppercaseFormatter: IFormatter = (data: string, toUpper: boolean) => {
	if (toUpper) {
		return data.toUpperCase();
	}

	return data.toLowerCase();
};

var formatter = uppercaseFormatter;

console.log(formatter('Test', false));
