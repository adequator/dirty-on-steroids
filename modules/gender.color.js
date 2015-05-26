// Половой вопрос
d3.addModule({
	type: "Социализм",
	name: 'Цветовая дифференциация полов',
	author: 'crea7or',
	config: {active: {type: 'checkbox', value: 1}},

	onPost: function (post) {
		this.processElements(post.info.get(0).querySelectorAll('a.c_user'));
	},

	onComment: function (comment) {
		this.processElements(comment.getFooter().get(0).querySelectorAll('a.c_user'));
	},

	//expecting array of a.c_user DOM elements
	processElements: function (elemArray) {
		if (!elemArray)return;

		function testFemale(el) {
			return el && el.textContent &&
				el.textContent.indexOf('Написала') > -1;
		}

		for (var i = 0; i < elemArray.length; i++) {
			var prev = elemArray[i].previousSibling;
			if (prev) {
				if (testFemale(prev) || testFemale(prev.previousSibling)) {
					//female
					elemArray[i].style.borderBottom = '1px solid #ff78f7';
				} else {
					//male
					elemArray[i].style.borderBottom = '1px solid #5086ff';
				}
				elemArray[i].style.textDecoration = 'none';
			}
		}
	}
});
