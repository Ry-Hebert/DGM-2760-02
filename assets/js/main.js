function1 = () =>
{
    let pos1 = document.querySelector('win-prop')
    let pos2 = document.querySelector('doc-prop')

    pos1.textContent=`Your window height is ${window.innerHeight}, and your window width is ${window.innerWidth}.\nYour window offset is ${window.pageXOffset} from the left, and ${window.pageYOffset} from the top.\nThe page URL is ${window.URL}`
    pos2.textContent=``
}