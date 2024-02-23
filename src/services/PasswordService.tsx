const GeneratePassword = () => {
    let password: string = '';
    let characters: string = 'Aa@$#123456789abcdefghijFfGHIJKkLMNOPpZz!';
    let passwordLength:number = 8;

    for(let i: number = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

export default GeneratePassword;