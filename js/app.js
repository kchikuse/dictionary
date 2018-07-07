(function($) {
	
	const index = lunr(function () {
	  	this.ref('i')
	  	this.field('k')
	  	this.field('t')

	 	for(let doc of docs) {
	   		this.add(doc)
	   	}
	})

	$('input').oninput = function() {
		
		const names = index.search(this.value).filter(i => i.score >= 0.4).map(i => docs.find(e => e.i == i.ref))

		$('ul').innerHTML = 
			names.map(e => `
				<a class="item"> ${e.k}
					<span>
						${e.t}
					</span>
				</a>`
			).join('\n')
	}
	
	$('loadr').style.visibility = 'hidden'
	$('label').style.visibility = 'visible'

})(document.querySelector.bind(document))