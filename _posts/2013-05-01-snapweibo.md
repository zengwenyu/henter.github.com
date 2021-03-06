---
layout: post
date: 2013-05-01 15:43:45
title: 开发了一个“限时微博”应用，现在新浪微博也可以“阅后即焚”
tags: 微博 snapweibo
---


5.6更新：
	
	增加删除提醒（通过官方微博@用户）
	受流量压力，改进延时问题
	完善限时标签格式，支持中文数字
	

5.4更新：
	
	由于最小时间粒度是一分钟，所以定时删除可能会出现时间误差，最多误差1分钟
	
	现在对此问题有修复，误差减少到20秒。
	

前天在[36kr](http://www.36kr.com/p/202923.html)上看到一篇文章，是基于Twitter的[efemr](http://www.efemr.com/)工具，类似于SnapChat，可以让微博内容“阅后即焚”，只需在微博上加一个“限时标签”，微博便会自动删除。

微博（大多数）是时效性很强的数据流，没有长时间存在的价值。

>而 efemr 还表示，这也是一种“保护你声誉”的方式，你可以发一些“阅后即焚”的段子，或者吐槽同事的玩笑。不过值得指明的是，如果推文在删除之前，已有其他用户通过传统 RT 的方式转发，那 efemr 功能就鞭长莫及了。

与Twitter不同的是，新浪微博对于转发的微博，是不保存“快照”的，也就是说如果你删掉了某条微博，他人即使转发了这条微博也不会看到原文内容了。


相信这个一点更符合“阅后即焚”的概念。

<br />

	
放一张截图。

![限时微博](/pic/snapweibo.png)

昨晚花了个通宵写出了这个微博应用，现在还在等待审核中，暂时无法公开。

<del>审核通过后我再放出地址。</del>


审核已通过：
# 官网 <http://snap.henter.me>


#或者在微博应用广场搜索“[限时微博](http://app.weibo.com/detail/3A3dz9)”

<br />
PS:

删除时间可以任意指定（只要是正整数就行，不能用小数）

时间单位有 `分钟` `小时` `天`，如下：
	
	#五分钟#
	#两小时#
	#一天#
	#3小时#
	#15分钟#
	#8天#

或者可以用英文简写，

`m`代表分钟，`h`代表小时， `d`代表天

如：

	#10m#
	#48h#
	#5d#


详细格式说明：

限时标签		| 说明
------- 	| ------
\#1分钟#		| 1分钟，数字支持1-999，下同
\#3m#		| 3分钟
\#两分钟#	| 2分钟，中文数字支持：一、二（两）、三...十
\#1天#		| 一天
\#一天#		| 一天
\#5d#		| 5天
\#10h#		| 10小时
\#3小时#		| 3小时
…			| ...

	