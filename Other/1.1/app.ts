interface UserInfo {
	name: string;
	readonly age: number;
	married?: boolean;
}

function getUser(userInfo: UserInfo): void {
	if (!userInfo.married) {
		userInfo.married = false;
	}
	console.log(`userInfo:${userInfo.name}年龄${userInfo.age}，婚否:${userInfo.married}`);
}

let uInfo: UserInfo = {
	name: 'Vane',
	age: 42,
};

uInfo.name = 'Ocean';

getUser(uInfo);
