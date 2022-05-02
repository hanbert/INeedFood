auto.waitFor()
const appName = "山姆会员商店";
launchApp(appName);
sleep(3000);
// 点击按钮
const clickSettle = (text) => {
	var button = className("android.widget.TextView").textStartsWith(text).findOnce()
	if (button) {
		button.click()
	}
	
}
// 点击父按钮
const clickParentSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOnce().parent().click()
}
//选择配送时间
const selectTime = (text, count) => {
	sendTime = className("android.widget.TextView").textStartsWith('14:30').findOnce(count)
	return sendTime
}
//文本判断
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const musicNotify = () => {
	const m = '/storage/emulated/0/Music/大籽-白月光与朱砂痣.mp3'
	media.playMusic(m);
	sleep(media.getMusicDuration());
}

const start = () => {
	var isSuccess = false
	var tryCount = 0
	while (!isSuccess) {
		// toastLog('开抢了~~')
		if (hasText('结算')) {
			var jiesuan = className("android.widget.Button").textStartsWith('结算').findOnce()
			if (jiesuan) {
				jiesuan.click()
			}
			// toastLog('结算~~')
			sleep(random(300, 800))
		} else if (hasText('今日订单已达上限')) {
			clickSettle('今日订单已达上限')
			sleep(random(300, 800))
		} else if (hasText('配送时间已约满') || hasText('提示')) {
			click('我知道了')
			tryCount = tryCount + 1
			if (tryCount >= 5) {
				back()
				// tryCount = 0
			}
			sleep(random(300, 800))
		} else if (hasText('去支付')) {
			clickSettle('去支付')
			sleep(random(300, 800))
		} else if (hasText('确认支付')) {
			click('支付宝')
			click('确认支付')
			sleep(random(300, 800))
		} 
	}
}
start()

