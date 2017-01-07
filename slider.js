

var ProgressBar = {
	length: 0,
	bubbles: [],
	init: function(length) {
		var bar = document.getElementById("slider").getElementsByTagName("section")[1];
		for (var i = 0; i < length; i++) {
			el = document.createElement("div");
			el.onclick = (function(i) { return function() {
				Slider.set(i);
			}})(i);
			bar.appendChild(el);
			this.bubbles.push(el);
		}
	},
	set: function(num) {
		for (let i = 0; i < Slider.num; i++)
			if (i <= num)
				this.bubbles[i].className = "completed";
			else this.bubbles[i].className = "";
	}
} 

var Data = {
	content: undefined,
	init: function(content_address, callback) {
		fetch(content_address).then(function(response){
			response.json().then(function(content){
				Data.content = content;
				return content;
			}).then(function(content){
				callback(content);
			});
		});
	}
}

var Slider = {
	current: 0,
	num: 0,
	img: undefined,
	title: undefined,

	previous_img: undefined,
	previous_title: undefined,
	animatable: undefined,

	init: function(content_address, target) {
		Data.init(content_address, function(content) {
			Slider.num = content.length;
			ProgressBar.init(Slider.num);

			let div = target.getElementsByClassName("content")[0];
			Slider.img = div.getElementsByTagName("img")[0];
			Slider.title = div.getElementsByTagName("h1")[0];

			let animatable = div.getElementsByClassName("animated")[0];
			Slider.previous_img = animatable.getElementsByTagName("img")[0];
			Slider.previous_title = animatable.getElementsByTagName("h1")[0];

			Slider.animatable = animatable;

			Slider.set(0);
		});
	},

	set: function(num, doanim = false) {
		ProgressBar.set(num);

		this.previous_img.src = this.img.src;
		this.previous_title.innerHTML = this.title.innerHTML;

		if (doanim) {
			Slider.animatable.style.visibility = "visible";
			this.img.onload = function(){
				Slider.animatable.classList.add("do");
				window.setTimeout(function() {
					Slider.animatable.style.visibility = "hidden";
					Slider.animatable.classList.remove("do");
				}, 500);
			}
		}

		this.img.src = Data.content[num].img;
		this.img.alt = Data.content[num].title;
		this.img.title = Data.content[num].title;
		this.title.innerHTML = Data.content[num].title;
	},

	setCurrent: function() {
		this.set(this.current, true);
	},

	next: function() {
		this.current++;
		if (this.current == this.num)
			this.current = 0;
		this.setCurrent();
	},
	previous: function() {
		this.current--;
		if (this.current < 0)
			this.current = this.num - 1;
		this.setCurrent();
	}
}


