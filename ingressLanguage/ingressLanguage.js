

var ingLang = {
	glyphs : [
		{ name:'Abandon', class:'Abandon'},
		{ name:'Adapt', class:'Adapt'},
		{ name:'Advance', class:'Advance'},
		{ name:'After', class:'After'},
		{ name:'Again-Repeat', class:'Again-Repeat'},
		{ name:'All', class:'All'},
		{ name:'Answer', class:'Answer'},
		{ name:'Attack-War', class:'Attack-War'},
		{ name:'Avoid-Struggle', class:'Avoid-Struggle'},
		{ name:'Barrier-Obstacle', class:'Barrier-Obstacle'},
		{ name:'Before', class:'Before'},
		{ name:'Begin', class:'Begin'},
		{ name:'Being-Human', class:'Being-Human'},
		{ name:'Body-Shell', class:'Body-Shell'},
		{ name:'Breathe', class:'Breathe'},
		//{ name:'Calibration-Grid', class:'Calibration-Grid'},
		{ name:'Capture', class:'Capture'},
		{ name:'Change-Modify', class:'Change-Modify'},
		{ name:'Chaos-Disorder', class:'Chaos-Disorder'},
		{ name:'Clear-All', class:'Clear-All'},
		{ name:'Clear', class:'Clear'},
		{ name:'Complex', class:'Complex'},
		{ name:'Conflict', class:'Conflict'},
		{ name:'Consequence', class:'Consequence'},
		{ name:'Contemplate', class:'Contemplate'},
		{ name:'Contract', class:'Contract'},
		{ name:'Courage', class:'Courage'},
		{ name:'Create-Creation', class:'Create-Creation'},
		{ name:'Creativity-Mind-Thought-Idea', class:'Creativity-Mind-Thought-Idea'},
		{ name:'Creativity', class:'Creativity'},
		{ name:'Danger', class:'Danger'},
		{ name:'Data-Signal-Message', class:'Data-Signal-Message'},
		{ name:'Defend', class:'Defend'},
		{ name:'Destination', class:'Destination'},
		{ name:'Destiny', class:'Destiny'},
		{ name:'Destroy-Destruction', class:'Destroy-Destruction'},
		{ name:'Deteriorate-Erode', class:'Deteriorate-Erode'},
		{ name:'Die', class:'Die'},
		{ name:'Difficult', class:'Difficult'},
		{ name:'Discover', class:'Discover'},
		{ name:'Distance', class:'Distance'},
		{ name:'Easy', class:'Easy'},
		{ name:'End-Close', class:'End-Close'},
		{ name:'Enlightened-B', class:'Enlightened-B'},
		{ name:'Enlightened', class:'Enlightened'},
		{ name:'Equal', class:'Equal'},
		{ name:'Escape', class:'Escape'},
		{ name:'Evolution', class:'Evolution'},
		{ name:'Failure', class:'Failure'},
		{ name:'Fear', class:'Fear'},
		{ name:'Follow', class:'Follow'},
		{ name:'Forget', class:'Forget'},
		{ name:'Future-Forward-Time', class:'Future-Forward-Time'},
		{ name:'Gain', class:'Gain'},
		{ name:'Government-City-Civilization-Structure', class:'Government-City-Civilization-Structure'},
		{ name:'Grow', class:'Grow'},
		{ name:'Harmony-Peace', class:'Harmony-Peace'},
		{ name:'Harm', class:'Harm'},
		{ name:'Have', class:'Have'},
		{ name:'Help', class:'Help'},
		{ name:'Hide', class:'Hide'},
		{ name:'Ignore', class:'Ignore'},
		{ name:'I-Me-Self', class:'I-Me-Self'},
		{ name:'Imperfect', class:'Imperfect'},
		{ name:'Improve', class:'Improve'},
		{ name:'Impure', class:'Impure'},
		{ name:'58 Intelligence', class:'58 Intelligence'},
		{ name:'Interrupt', class:'Interrupt'},
		{ name:'Journey', class:'Journey'},
		{ name:'Knowledge', class:'Knowledge'},
		{ name:'Lead', class:'Lead'},
		{ name:'Legacy', class:'Legacy'},
		{ name:'Less', class:'Less'},
		{ name:'Liberate', class:'Liberate'},
		{ name:'Lie', class:'Lie'},
		{ name:'Live-Again-Reincarnate', class:'Live-Again-Reincarnate'},
		{ name:'Lose', class:'Lose'},
		{ name:'Message', class:'Message'},
		{ name:'Mind-Idea-Thought', class:'Mind-Idea-Thought'},
		{ name:'More', class:'More'},
		{ name:'Mystery', class:'Mystery'},
		{ name:'Nature', class:'Nature'},
		{ name:'New', class:'New'},
		{ name:'No-Not-Absent', class:'No-Not-Absent'},
		{ name:'Nourish', class:'Nourish'},
		{ name:'Nzeer', class:'Nzeer'},
		{ name:'Old', class:'Old'},
		{ name:'Open-All', class:'Open-All'},
		{ name:'Opening-Doorway-Portal', class:'Opening-Doorway-Portal'},
		{ name:'Open', class:'Open'},
		{ name:'Past', class:'Past'},
		{ name:'Path', class:'Path'},
		{ name:'Perfection', class:'Perfection'},
		{ name:'Perspective', class:'Perspective'},
		{ name:'Potential', class:'Potential'},
		{ name:'Presence', class:'Presence'},
		{ name:'Present-Now', class:'Present-Now'},
		{ name:'Pure-Purity', class:'Pure-Purity'},
		{ name:'Pursue-Chase', class:'Pursue-Chase'},
		{ name:'Pursue', class:'Pursue'},
		{ name:'Question', class:'Question'},
		{ name:'React', class:'React'},
		{ name:'Rebel', class:'Rebel'},
		{ name:'Recharge', class:'Recharge'},
		{ name:'Resistance-B', class:'Resistance-B'},
		{ name:'Resist-Resistance', class:'Resist-Resistance'},
		{ name:'Restraint', class:'Restraint'},
		{ name:'Retreat', class:'Retreat'},
		{ name:'Safety', class:'Safety'},
		{ name:'Save-Rescue', class:'Save-Rescue'},
		{ name:'Seek-Search', class:'Seek-Search'},
		{ name:'See', class:'See'},
		{ name:'Self', class:'Self'},
		{ name:'Separate', class:'Separate'},
		{ name:'Shaper-Collective', class:'Shaper-Collective'},
		{ name:'Shaper+Human', class:'Shaper+Human'},
		{ name:'Share', class:'Share'},
		{ name:'Simple', class:'Simple'},
		{ name:'Soul-Spirit-Life-Force', class:'Soul-Spirit-Life-Force'},
		{ name:'Stability', class:'Stability'},
		{ name:'Strong', class:'Strong'},
		{ name:'48 Technology', class:'48 Technology'},
		{ name:'Together', class:'Together'},
		{ name:'Truth', class:'Truth'},
		{ name:'Unbounded', class:'Unbounded'},
		{ name:'Unknown01', class:'Unknown01'},
		{ name:'Unknown05', class:'Unknown05'},
		{ name:'Unknown06', class:'Unknown06'},
		{ name:'Use', class:'Use'},
		{ name:'Victory', class:'Victory'},
		{ name:'Want', class:'Want'},
		{ name:'Weak', class:'Weak'},
		{ name:'We-Us', class:'We-Us'},
		{ name:'Worth', class:'Worth'},
		{ name:'XM', class:'XM'},
		{ name:'You-Other', class:'You-Other'},
	],

	score : {},
	el : null
};

function welcome(outputId) {
	ingLang.el = $(outputId);
	reset();
};

function clearEl() {
	ingLang.el.html('');
};

function reset() {
	// reset the score and the ui.
	ingLang.score = {
		Questions : 0,
		Correct : 0
	}
	clearEl();
	doWelcome();
};

function doWelcome() {
	ingLang.el.append('<p id="welcome">Welcome to the Ingress Language Trainer.</p>');
	ingLang.el.append('<button id="start">Start</button>');
	$('#start').on("click",doRound)
};

function getRandItem() {
	var r = Math.floor(Math.random() * ingLang.glyphs.length);
	console.log(r);
	return ingLang.glyphs[r];
}


function qTypeImage(){
	ingLang.el.append('<p>Which glyph represents:</p>');
	var item = getRandItem();
	ingLang.el.append('<p class="glyphName">' + item.name + '</p>');

	ingLang.el.append('<div class="answer-images">');

	var options = [null,null,null,null];
	options[Math.floor(Math.random() * 4)] = item;
	for (var i=0; i<4; i++) {
		if(options[i] === null) {
			options[i] = getRandItem();
		}
	}


	for (var i=0; i<4; i++) {
		var id = (options[i].name == item.name) ? 'correct' : 'wrong-' + i;
		ingLang.el.append('<a href="#" class="glyph ' + options[i].class + '" id="' + id + '"></a>');
		$('#wrong-' + i).on('click',wrongAnswer);
	}
	$('#correct').on('click',rightAnswer);
	ingLang.el.append('</div>');
}

function wrongAnswer(){
	ingLang.score.Correct -=1;
	$(this).addClass('fail');
}

function rightAnswer(el){
	ingLang.score.Correct +=1;
	$(this).addClass('success');
}

function qTypeName(){
	ingLang.el.append('<p>What is the name of:</p>');
	var item = getRandItem();
	ingLang.el.append('<div class="glyph ' + item.class + '"></div>');
}

function doRound() {
	clearEl();

	ingLang.score.Questions +=1;

	// header
	ingLang.el.append('<div class="header">');
	ingLang.el.append('	<span> Question #:' + ingLang.score.Questions + ' </span><br/>');
	ingLang.el.append('	<span> Correct Answers :' + ingLang.score.Correct + ' </span>');
	ingLang.el.append('</div>');


	var qType = getImageOrName();
	switch (qType) {
		case 1:
		case 2: qTypeImage(); break;
		//case 2: qTypeName(); break;
	}
	ingLang.el.append('<button id="next">Next</button>');
	$('#next').on("click",doRound)
};

function getImageOrName(){
	return Math.floor(Math.random() * 2) + 1;
};
