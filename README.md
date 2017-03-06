#Alulu Website
{% if (o.author.url) { %}
    <a href="{%=encodeURI(o.author.url)%}">{%=o.author.name%}</a>
{% } else { %}
    <em>No author url.</em>
{% } %}

<ul>
				{% for (var i=0; i<o.features.length; i++) { %}
	    		<li>{%=o.features[i]%}</li>
			{% } %}
			</ul>

<div id="brew" class="brew js-brew" style="background-image: url('https://b922bde52f23a8481830-83cb7d8d544f653b52d1a1621f05ea9d.ssl.cf3.rackcdn.com/images/_1920x1296_crop_center-center/USP_24_7_desktop-1.jpg')">

	<div class="brew-body">
		
		<h2 class="brew-name js-name">Marshmallow Winter</h2>
		<div class="brew-taste js-taste">Very dry, chocolate and roasted malts prevail.</div>	

		<div class="brew-details">
			<div class="brew-glass">
				<img class="brew-svg" src="./public/images/beer-glass-white.svg">
			</div>

			<dl class="brew-qualities js-qualities">
				<dt class="brew-qualities-label">Original Gravity</dt>
				<dd class="brew-qualities-info">1.044</dd>
				<dt class="brew-qualities-label">Alcohol by Volume</dt>
				<dd class="brew-qualities-info">4.40%</dd>
				<dt class="brew-qualities-label">Color</dt>
				<dd class="brew-qualities-info">Dark brown/black</dd>
				<dt class="brew-qualities-label">Bitterness</dt>
				<dd class="brew-qualities-info">Medium</dd>
			</dl>
			

		</div>

		<strong class="brew-disclaimer">AVAILABLE WHILE SUPPLIES LAST</strong>
		
		<button class="btn-call-to-action brew-share js-share">SHARE THIS BEER ON FACEBOOK, TWITTER ETC</button>

		<div class="brew-description js-description">
			TK The warriors "of" the data mines of the Martalino system perfected this ale over a millenium and drank it for vitality and to heal electric wounds from the process wolves of the desolate valley.
		</div>
	</div>

	

</div>