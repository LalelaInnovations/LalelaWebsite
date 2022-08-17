export class Admin {
    constructor(
        _id,
        cellphoneNumber,
        email,
        encodedImage,
        encryptedPassword,
        hasFingerprintEnabled,
        hearingDeviceName,
        idNumber,
        location,
        name,
        password,
        surname
    )
    {
        this._id = _id;
        this.cellphoneNumber = cellphoneNumber;
        this.email = email;
        this.encodedImage = encodedImage;
        this.encryptedPassword = encryptedPassword;
        this.hasFingerprintEnabled = hasFingerprintEnabled;
        this.hearingDeviceName = hearingDeviceName;
        this.idNumber = idNumber;
        this.location = location;
        this.name = name;
        this.password = password;
        this.surname = surname;
    }
}