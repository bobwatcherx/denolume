export const title = "my javascript page"
export const layout = "./_includes/layout.njk"

export const sampledata = [
	{
		text:"joni",
		done:false,
    url: "https://twitter.com/misteroom"
	},
	{
		text:"udin",
		done:true,
    url: "https://twitter.com/misteroom"
	},
]
export default function ({name,
age,
address,
sampledata}){
	return `
	<div>
		<h1>${title}</h1>
		<h1>${age}</h1>
		<h1>${address}</h1>
		<h1>${name}</h1>
		<br/>
		<ul>
		${ sampledata.map((link)=>
	`<li><a href="${ link.url }">${ link.text }</a></li>`
		).join("")}
		</ul>
	</div>

	`
}