export const getUserName = () => {
    const userName = process.argv.find((arg) => arg.includes('username'));

    return userName ? userName.split('=')[1] : null;
};
