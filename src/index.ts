import cjays from 'cjays';
import cleanStack from 'clean-stack';
const errors: Map<string, string> = new Map();

const Manager = (errorName: string, errorObject: object): void => {
	if (!errors.has(errorName)) return;
	const err = new Error(cjays(errors.get(errorName), errorObject));
	console.log(cleanStack(err.stack));
};

const createError = (errorName: string, errorString: string): void => {
	errors.set(errorName, errorString);
};

export { Manager, createError };
