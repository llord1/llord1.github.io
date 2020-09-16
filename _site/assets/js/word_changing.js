function swap_words(side) {

	var selected_word = document.getElementById(side + "_word_chooser").value;
	var conjugations = words[selected_word];

	for (const conjugation in conjugations) {
		document.querySelectorAll("#" + side + "_hand ." + conjugation)[0].innerHTML = conjugations[conjugation];
	}
}
