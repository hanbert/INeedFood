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
			var jisuda = text('极速达').findOnce()
			if (jisuda) {
				jisuda.click()
			}
			var jiesuan = className("android.widget.Button").textStartsWith('结算').findOnce()
			if (jiesuan) {
				jiesuan.click()
			}
			// toastLog('结算~~')
			sleep(random(300, 800))
		} else if (hasText('返回修改')) {
			clickSettle('返回修改')
			sleep(random(300, 800))
		} else if (id('settle_oos_content_tv').text('请选择').findOnce()) {
			id("settle_oos_hint").findOne().click()
			sleep(random(300, 800))
			textStartsWith('其他商品继续配送').findOne().parent().click()
			sleep(random(300, 800))
		} else if (hasText('今日订单已达上限')) {
			clickSettle('今日订单已达上限')
			sleep(random(300, 800))
		} else if (hasText('重试') || hasText('返回修改')) {
			back()
			sleep(random(300, 800))
		} else if (hasText('配送时间已约满') || hasText('提示')) {
			click('我知道了')
			back()
			sleep(random(300, 800))
		} else if (hasText('去支付')) {
			textStartsWith('支付宝').depth(13).findOne().parent().parent().click()
			var aggree = text('我已阅读并同意').checked(false).findOnce()
			if (aggree) {
				aggree.click()
			}
			clickSettle('去支付')
			sleep(random(300, 800))
		}
	}
}
start()

