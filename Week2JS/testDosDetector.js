const DOS_Detector = require('./dosDetector')
const detector = new DOS_Detector(3000)

detector.addUrl('google.com')


setTimeout(()=> detector.addUrl('google.com'), 4000)



