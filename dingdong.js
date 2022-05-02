auto.waitFor()
const appName = "叮咚买菜";
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
	var timeCount = 0
	while (!isSuccess) {
		// toastLog('开抢了~~')
		if (hasText('去结算')) {
			clickSettle('去结算')
			sleep(random(300, 800))
		} else if (hasText('重新加载')) {
			clickParentSettle('重新加载')
			sleep(random(300, 800))
		} else if (hasText('返回购物车') && !hasText('正在加载')) {
			clickSettle('返回购物车')
			// toastLog('返回购物车')
			sleep(random(300, 800))
		} else if (hasText('请选择送达时间')) {
			var flag = id('tv_multi_product_time_text').findOne().click()
			while (!flag) {
				flag = id('tv_multi_product_time_text').findOne().click()
			}
			// toastLog('唤起时间选择面板')
			sleep(random(300, 800))
		} else if (hasText('选择送达时间')) {
			var noHour = id('tv_select_time_no_hour').findOnce();
			if(noHour) {
				id('iv_dialog_select_time_close').click()
				// toastLog('无可预约时间')
				back()
				sleep(random(300, 800))
				continue
			}
			var timeContent = id("rv_selected_hour").findOne()
			var childCount = timeContent.childCount()
			var index = random(0, childCount - 1)
			var target = timeContent.child(index).findOne(id("tv_item_select_hour_title").className("android.widget.TextView"))
			if (timeCount <= 6 && target.parent().click()) {
				timeCount = timeCount + 1
				// toastLog('时间:' + target.text())
				sleep(random(30, 100))
			} else {
				timeCount = 0
				id('iv_dialog_select_time_close').click()
				// toastLog('无合适配送时间')
				back()
				sleep(random(300, 800))
				continue
			}
		} else if (hasText('立即支付')) {
			var canPay = id('tv_submit').findOne().click()
			while (!canPay) {
				canPay = id('tv_submit').findOne().click()
			}
			// toastLog('准备支付!!!')
			sleep(random(800, 1000))
			if (hasText('选择送达时间')) {
				click("选择送达时间")
				sleep(random(300, 800))
			}
		} else if (hasText('继续支付')) {
			id('tv_goto_pay').findOnce().click()
			sleep(random(300, 800))
		}
	}
}
start()

