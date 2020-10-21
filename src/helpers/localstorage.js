export const localstorageSet = (key, item) => {
	window.localStorage.setItem(key, item);
};

export const localstorageGet = (key) => {
	return window.localStorage.getItem(key);
};

export const localstorageRemove = (key) => {
	return window.localStorage.removeItem(key);
};
