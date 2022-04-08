auto.waitFor()
const appName = "每日优鲜";
launchApp(appName);
sleep(3000);
// 点击按钮
const clickSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOne().click()
}
// 点击父按钮
const clickParentSettle = (text) => {
	className("android.widget.TextView").textStartsWith(text).findOne().parent().click()
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
	while (!isSuccess) {
		if(descStartsWith('去结算').exists()) {
			descStartsWith('去结算').findOne().click()
			sleep(1000)
		} else if(descStartsWith('知道了').exists()) {
			descStartsWith('知道了').findOne().click()
			sleep(1000)
		} else if(descStartsWith('提交订单').exists()) {
			descStartsWith('提交订单').findOne().click()
			sleep(1000)
		} else if(descStartsWith('去支付').exists()) {
			descStartsWith('去支付').findOne().click()
			sleep(1000)
		} else if(descStartsWith('确定').exists()) {
			descStartsWith('确定').findOne().click()
			sleep(1000)
		}
	}
}
start()

