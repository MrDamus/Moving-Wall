document.documentElement.style.setProperty("--one", "25%")
document.documentElement.style.setProperty("--two", "25%")
document.documentElement.style.setProperty("--three", "25%")
document.documentElement.style.setProperty("--four", "25%")

document.addEventListener("mouseover", function(){
	document.documentElement.style.setProperty("--one", "20%")
	document.documentElement.style.setProperty("--two", "20%")
	document.documentElement.style.setProperty("--three", "20%")
	document.documentElement.style.setProperty("--four", "20%")
})

document.addEventListener("mouseout", zoom)
function zoom(){
	document.documentElement.style.setProperty("--one", "25%")
	document.documentElement.style.setProperty("--two", "25%")
	document.documentElement.style.setProperty("--three", "25%")
	document.documentElement.style.setProperty("--four", "25%")
}