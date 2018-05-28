/**
 * Created by zhu on 18/5/28.
 */
var ticket = 2
var flag = false
function pointerOnClick() {
    if(flag) return
    var wheel = document.getElementsByClassName("wheel-bg")[0]
    if(ticket==2) wheel.style["transform"] = "rotate(560deg)"
    else if(ticket==1) wheel.style["transform"] = "rotate(1060deg)"
    else {
        changeToastAndShow()
        return
    }
    ticket--
    changeTicketLabel()
    flag = true
    setTimeout(function () {
        changeToastAndShow()
    }, 4100)
}

function changeTicketLabel() {
    var ticketsLabel = document.getElementsByClassName("lottery_ticket")[0]
    ticketsLabel.innerHTML = "抽奖次数:"+ticket
}

function changeToastAndShow() {
    var img = document.getElementsByClassName("toast-picture")[0]
    var title = document.getElementsByClassName("toast-title")[0]
    if (!flag) {
        img.src = "img/useout.png"
        title.innerHTML = "机会用完了，亲亨亨获取更多机会~"
    } else if (ticket==1) {
        img.src = "img/sorry.png"
        title.innerHTML = "再差一点就中奖了~"
    } else {
        img.src = "img/happy.png"
        title.innerHTML = "恭喜你获得'YSL圆管'一支"
    }
    var toast = document.getElementsByClassName("toast")[0]
    toast.style["display"] = "block"
}

function closebtnOnClick() {
    var toast = document.getElementsByClassName("toast")[0]
    toast.style["display"] = "none"
    flag = false
}