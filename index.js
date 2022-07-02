const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require('convert-units');
const carlosmention = '<@!717767635965575238>';
const length = '-mm -cm -m -km -in -ft-us -ft -mi';
const area = '-mm2 -cm2 -m2 -ha -km2 -in2 -ft2 -ac -mi2';
const volume = '-mm3 -cm3 -ml -l -kl -m3 -km3 -tsp -Tbs -in3 -fl-oz -cup -pnt -qt -gal -ft3 -yd3';
const volflow = '-mm3/s -cm3/s -ml/s -cl/s -dl/s -l/s -l/min -l/h -kl/s -kl/min -kl/h -m3/s -m3/min -m3/h -km3/s -tsp/s -Tbs/s -in3/s -in3/min -in3/h -fl-oz/s -fl-oz/min -fl-oz/h -cup/s -pnt/s -pnt/min -pnt/h -qt/s -gal/s -gal/min -gal/h -ft3/s -ft3/min -ft3/h -yd3/s -yd3/min -yd3/h';
const temp = '-C -F -K -R';
const time = '-ns -mu -ms -s -min -h -d -week -month -year';
const frequency = '-Hz -mHz -kHz -MHz -GHz -THz -rpm -deg/s -rad/s';
const speed = '-m/s -km/h -m/h -knot -ft/s';
const pace = '-s/m -min/km -s/ft -min/km';
const pressure = '-Pa -hPa -kPa -MPa -bar -torr -psi -ksi';
const digital = '-b -Kb -Mb -Gb -Tb -B -KB -MB -GB -TB';
const illuminance = '-lx -ft-cd';
const partsper = '-ppm -ppb -ppt -ppq';
const voltage = '-V -mV, -Kv';
const current = '-A -mA -kA';
const power = '-W -mW -kW -MW -GW';
const apparentpower = '-VA -mVA -kVA -MVA -GVA';
const reactivepower = '-VAR -mVAR -kVAR -MVAR -GVAR';
const energy = '-Wh -mWh -kWh -MWh -GWh -J -kJ';
const reactiveenergy = '-VARh -mVARh -kVARh -MVARh -GVARh';
const angle = '-deg -rad -grad -arcmin -arcsec';
const unitslist = '-length -area -volume -volumeflow -temperature -time -frequency -speed -pace -pressure -digital -illuminance -parts-per -voltage -current -power -apparent-power -reactive-power -energy -reactive-energy -angle';
const commands = 'Here are a list of commands I am capable of performing:\n**!convert** <number> <beginningunit> to <finalunit>\n**!units** (list)\n**!!help or !possibilities** - Shows this!\n**!part** - Sends the parts folder! **NOTE:** Will send community project parts folder if in community project discussion channel or IITR parts if in any other channel\n**!part iitr** - Sends the IITR parts folder!\n**!part communityproject** - Sends the parts folder for the current community project!';
const communityprojecturl = 'https://drive.google.com/drive/folders/1pHx3BqVeRJlVSN5GvxULWNS51VtG3t6H?usp=sharing';
const iitrparts = 'https://drive.google.com/drive/folders/1Fj-SPUztpuraXlCNruzjTrvJf2oTqM0D?usp=sharing';
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.once('ready', () => {
	console.log('Ready!');
});
client.login(TOKEN);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
	if (message.content.includes('!convert')) {
		if (message.author.username != 'C.A.R.L.O.S') {
			const first = message.content;
			const num = first.substring(9);
			const final = num.split(' ');
			const number = (final.slice(0, 1));
			const beginunit = (final.slice(1, 2));
			const finalunit = (final.slice(3, 4));
			const finalnumber = convert(number).from(beginunit).to(finalunit);
			const result = finalnumber.toFixed(2);
			const nfObject = new Intl.NumberFormat('en-US');
			const finalresult = nfObject.format(result);
			message.channel.send(finalresult + ' ' + finalunit);
		}
	}
	if (message.content === '!units length') {
		const lengthunits = length.split(' ');
		message.channel.send(lengthunits);
	}
	if (message.content === '!units area') {
		const areaunits = area.split(' ');
		message.channel.send(areaunits);
	}
	if (message.content === '!units volume') {
		const volunits = volume.split(' ');
		message.channel.send(volunits);
	}
	if (message.content === '!units volumeflow') {
		const volflowunits = volflow.split(' ');
		message.channel.send(volflowunits);
	}
	if (message.content === '!units temperature') {
		const temperatureunits = temp.split(' ');
		message.channel.send(temperatureunits);
	}
	if (message.content === '!units time') {
		const timeunits = time.split(' ');
		message.channel.send(timeunits);
	}
	if (message.content === '!units frequency') {
		const frequencyunits = frequency.split(' ');
		message.channel.send(frequencyunits);
	}
	if (message.content === '!units speed') {
		const speedunits = speed.split(' ');
		message.channel.send(speedunits);
	}
	if (message.content === '!units pace') {
		const paceunits = pace.split(' ');
		message.channel.send(paceunits);
	}
	if (message.content === '!units pressure') {
		const pressureunits = pressure.split(' ');
		message.channel.send(pressureunits);
	}
	if (message.content === '!units digital') {
		const digitalunits = digital.split(' ');
		message.channel.send(digitalunits);
	}
	if (message.content === '!units illuminance') {
		const illuminanceunits = illuminance.split(' ');
		message.channel.send(illuminanceunits);
	}
	if (message.content === '!units parts-per') {
		const partsperunits = partsper.split(' ');
		message.channel.send(partsperunits);
	}
	if (message.content === '!units voltage') {
		const voltageunits = voltage.split(' ');
		message.channel.send(voltageunits);
	}
	if (message.content === '!units current') {
		const currentunits = current.split(' ');
		message.channel.send(currentunits);
	}
	if (message.content === '!units power') {
		const powerunits = power.split(' ');
		message.channel.send(powerunits);
	}
	if (message.content === '!units apparent-power') {
		const apparentpowerunits = apparentpower.split(' ');
		message.channel.send(apparentpowerunits);
	}
	if (message.content === '!units reactive-power') {
		const reactivepowerunits = reactivepower.split(' ');
		message.channel.send(reactivepowerunits);
	}
	if (message.content === '!units energy') {
		const energyunits = energy.split(' ');
		message.channel.send(energyunits);
	}
	if (message.content === '!units reactive-energy') {
		const reactiveenergyunits = reactiveenergy.split(' ');
		message.channel.send(reactiveenergyunits);
	}
	if (message.content === '!units angle') {
		const angleunits = angle.split(' ');
		message.channel.send(angleunits);
	}
	if (message.content === '!units list') {
		const fullunitslist = unitslist.split(' ');
		message.channel.send(fullunitslist);
	}
	if (message.content === '!possibilities' || message.content === '!!help') {
		message.channel.send(commands);
	}
	if (message.content === '!licc') {
		message.channel.send('scoo ba doo ba dwee doo dahhhh');
	}
	if (message.content === '!parts' || message.content === '!part') {
		if (message.channel.id === '712087976758214686') {
			message.author.send(communityprojecturl);
			message.react('✅');
		}
		else {
			message.author.send(iitrparts);
			message.react('✅');
		}
	}
	if (message.content === '!parts iitr' || message.content === '!part iitr') {
		message.author.send(iitrparts);
		message.react('✅');
	}
	if (message.content === '!parts communityproject' || message.content === '!part communityproject') {
		message.author.send(communityprojecturl);
		message.react('✅');
	}
	if (message.content.includes (carlosmention) && message.content.includes ('help me')) {
		message.channel.send(commands);
	}
	else if (message.content.includes (carlosmention)) {
		const carlosreply = (Math.random());
		console.log(carlosreply);
		if (carlosreply < 0.2) {
			message.channel.send('leave me alone');
		}
		else if (carlosreply > 0.8) {
			message.channel.send('what do you want');
		}
		else {
			message.channel.send('hi');
		}
	}
});
