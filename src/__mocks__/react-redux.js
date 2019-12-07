export const connectAdvanced = jest.fn().mockImplementation((component) => component);
const mockConnect = () => connectAdvanced;

export const connect = jest.fn().mockImplementation(mockConnect);
