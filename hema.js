auto.waitFor()
const appName = "盒马";
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
		if(desc('盒区团购').exists()) {
			desc('盒区团购').findOne().click()
			sleep(1000)
		} else if (textContains('立即下单').exists()) {
			var flag = className("android.view.View").textStartsWith('立即下单').findOne().click()
			sleep(1000)
		} else if (textStartsWith('选择商品后即可下单').exists()) {
			//选商品
			className('android.view.View').clickable().depth(16).find().forEach((elem) => {
				elem.click()
			})
			sleep(1000)
		} else if (textStartsWith('提交订单').exists()) {
			click('提交订单')
			sleep(1000)
		} else if (textStartsWith('确认').exists()) {
			text('确认').findOnce().click()
			sleep(1000)
		}  else if (textStartsWith('很抱歉').exists()) {
			textStartsWith('确定').findOnce().parent().click()
			sleep(1000)
		} else if (!textContains('蔬菜').exists()) {
			toastLog('没有蔬菜')
			back()
			sleep(1000)
		}
	}
}
start()

