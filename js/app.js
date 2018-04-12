(function() {
	
	let index = lunr(function () {
	  this.ref('i')
	  this.field('k')
	  this.field('t')

	  docs.forEach(function (doc) {
	    this.add(doc) }, this)
	})

	let doSearch = function() {
		
		let query = this.value
		
		if(query.startsWith('*')) {
			query = query.substring(1)
		}

		let names = index.search(query).filter(i => i.score >= 0.5).map(i => docs.find(e => e.i == i.ref))

		document.querySelector('ul').innerHTML = `
			${names.map(name => `
				<a class="item"> ${name.k}
					<span class="item-note">
						${name.t}
					</span>
				</a>`
			).join('\n')} `
	}

	document.querySelector('input').onkeyup = doSearch
	document.querySelector('div.spinner').style.visibility = 'hidden'
	document.querySelector('.item-input').style.visibility = 'visible'

})();