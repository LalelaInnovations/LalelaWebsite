export class User {
    constructor(
        accounttype,
        diagnosticCredits, 
        email, 
        id, 
        idNumb, 
        isSA, 
        language, 
        lastPaymentID, 
        name, passcode, 
        phone, 
        screeningCredits, 
        surname
        ) 
        {
        this.accounttype = accounttype;
        this.diagnosticCredits = diagnosticCredits;
        this.email = email;
        this.id = id;
        this.idNumb = idNumb;
        this.isSA = isSA;
        this.language = language;
        this.lastPaymentID = lastPaymentID;
        this.name = name;
        this.passcode = passcode;
        this.phone = phone;
        this.screeningCredits = screeningCredits;
        this.surname = surname;
    }
}