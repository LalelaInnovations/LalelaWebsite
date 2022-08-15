export class TestResult {
    constructor(id, adminID, date, feedback, patientTestData, testType, heard, kHzArr, passed, patientID) {
        this.id = id;
        this.adminID = adminID;
        this.date = date;
        this.feedback = feedback;
        this.patientTestData = patientTestData;
        this.testType = testType;
        this.heard = heard;
        this.kHzArr = kHzArr;
        this.passed = passed;
        this.patientID = patientID;
    }
}