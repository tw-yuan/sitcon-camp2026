export type ScheduleDayType = "opening" | "software" | "artificial-intelligence" | "security" | "closing";

export const scheduleSlots = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "睡覺"] as const;

export type ScheduleSlot = (typeof scheduleSlots)[number];

export type ScheduleEventCategory = "啟程" | "主線課程" | "活動" | "生活" | "休息" | "總結";

export interface ScheduleMeta {
	title: string;
	description: string;
	note?: string;
}

export interface ScheduleBlock {
	startSlot: ScheduleSlot;
	span?: number;
	eventId: string;
}

export interface ScheduleDay {
	id: string;
	title: string[];
	subtitle: string;
	type: ScheduleDayType;
	blocks: ScheduleBlock[];
}

export interface ScheduleEvent {
	id: string;
	name: string;
	summary: string;
	category: ScheduleEventCategory;
	isInteractive?: boolean;
	description?: string[];
	image?: {
		src: string;
		alt: string;
	};
}

export const scheduleMeta: ScheduleMeta = {
	title: "活動課表",
	description: "SITCON Camp 2026 將圍繞軟體工程、人工智慧與資訊安全三大主線展開，並穿插交流、實作與活動。"
};

export const scheduleEvents: ScheduleEvent[] = [
	{
		id: "opening",
		name: "開幕",
		summary: "認識營隊節奏與接下來五天的學習安排。",
		description: ["從開幕開始進入 SITCON Camp 的五天四夜。", "學員會理解營隊主軸、活動規則與接下來的課程安排，準備好和小隊夥伴一起展開學習與實作。"],
		category: "啟程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/start-and-opening.jpg",
			alt: "SITCON Camp 開幕現場"
		}
	},
	{
		id: "icebreaking",
		name: "破冰",
		summary: "透過互動任務，認識一起學習與合作的夥伴。",
		description: ["破冰不只是為了記住名字，而是讓大家有機會交換想法、發現彼此的好奇心。", "透過輕鬆的互動與任務，學員會認識小隊夥伴，熟悉營隊氣氛。"],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/icebreaking.jpg",
			alt: "學員在破冰活動中互動交流"
		}
	},
	{
		id: "quest",
		name: "闖關活動",
		summary: "結合觀察與分析，與隊友一同攻克隱藏在資訊背後的關卡",
		description: [
			"當 AI 已經成為世界的一部分，那麼身處其中的我們，又該如何理解與運用科技？",
			"圍繞軟體工程、機器學習與資訊安全三大方向設計的挑戰內容，將結合觀察、分析與團隊合作等元素，讓大家在互動與探索的過程中，逐漸認識資訊科技背後的思考方式與應用場景。",
			"或許答案不只存在於程式之中，也藏在團隊合作與每一次推理的過程裡。",
			"準備好一起踏入這場科技探索了嗎？"
		],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與闖關活動"
		}
	},
	{
		id: "agent-battle",
		name: "？？？",
		summary: "神秘活動...",
		description: ["即將揭曉..."],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與互動活動"
		}
	},
	{
		id: "lab-setup",
		name: "電腦教室環境設定",
		summary: "完成接下來課程需要的環境與工具準備。",
		description: ["協助學員完成電腦教室環境與工具設定，讓後續主線課程能順利進行。"],
		category: "啟程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/start-and-opening.jpg",
			alt: "課程環境設定"
		}
	},
	{
		id: "software-main",
		name: "軟工主線課程",
		summary: "用軟體工程師的方法思考、協作與維護專案。",
		description: ["軟體工程主題日的核心，是讓學員了解一個專案不只是把程式寫出來，而是要能被理解、被協作、被維護，並在需求變動時繼續前進。"],
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/software-main.jpg",
			alt: "軟體工程主題日課程現場"
		}
	},
	{
		id: "ml-main",
		name: "人工智慧主線課程",
		summary: "理解模型、資料與判斷之間的關係。",
		description: ["人工智慧與機器學習主題課程會帶學員理解模型不是魔法，而是和資料品質、問題定義與驗證方法緊密相關的工具。"],
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/ai-main.jpg",
			alt: "人工智慧主題日課程現場"
		}
	},
	{
		id: "security-main",
		name: "資安主線課程",
		summary: "從攻防視角理解系統安全與資安思維。",
		description: ["資訊安全主題日將帶學員靠近資安領域的思考方式。", "", "資安不只是找到漏洞或解出題目，更是在理解系統如何運作，以及攻擊者與防禦者會如何看待同一個問題。"],
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/security-main.jpg",
			alt: "資訊安全主題日課程現場"
		}
	},
	{
		id: "agentic-coding",
		name: "AI 寫程式經驗交流",
		summary: "課程結束後，和同學一起聊聊實際使用 AI 寫程式工具的經驗：哪裡真的省時間？哪裡又容易踩坑？",
		description: [
			"現在越來越多人會用 AI 協助寫程式，從產生雛形、理解錯誤訊息，到修改程式、補上測試，都可能交給 AI 幫忙。但工具越方便，也越容易遇到新的問題：它寫出來的程式真的對嗎？修改後會不會破壞原本功能？我們該怎麼判斷什麼時候可以相信它？",
			"",
			"在這個課後交流環節中，學員可以和同學分享自己使用 AI 寫程式工具的經驗，聊聊用過哪些方法、遇過哪些問題、哪些做法真的有幫助。經過一整天的軟體工程課程後，我們也會一起回頭思考：當 AI 可以幫我們寫更多程式碼時，需求釐清、架構設計、測試與維護為什麼變得更加重要。"
		],
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/software-main.jpg",
			alt: "AI 寫程式經驗交流"
		}
	},
	{
		id: "heisenbug",
		name: "破解位元城的都市傳說",
		summary:
			"位元城自古流傳著一則都市傳說：「當交易的巔峰過後，喧嘩終歸於海，財富與浮名皆隨浪隱入塵煙。」而如今，政府觀察到這則都市傳說似乎應證的情形，身為收到政府指派的守衛隊，你們該如何解救這場危機？",
		description: [
			"在 AI 發達的時代，人與人的溝通變的稀薄，除了和 AI 聊聊天，也有人會請 AI 幫忙分析怎麼回復他人的訊息，但即使人工智慧在發達，交流仍是必不可少的，",
			"",
			"在課程之後的休閒，讓我們一起活絡筋骨、和營隊的新朋友們一起了解著名的「海森堡 Bug」的故事吧！"
		],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與海森堡 Bug 活動"
		}
	},
	{
		id: "reality-puzzle",
		name: "實境解謎",
		summary: "在場地各處尋找線索，和隊友一起解開藏在營隊中的謎題。",
		description: [
			"實境解謎會把線索藏進營隊場地的各個角落，學員需要走出教室、觀察環境，尋找散落在四周的提示與關鍵資訊。每一道謎題都不只是單純的問答，而是需要結合觀察、推理、討論與團隊分工，才能一步步靠近答案。",
			"",
			"在這個活動中，學員會和小隊夥伴一起探索場地、交換想法、驗證猜測，也可能在卡關時從別人的觀點中找到新的切入點。透過解謎的過程，讓大家在課程之外用另一種方式熟悉營隊空間，也在合作與推理中累積共同完成任務的經驗。"
		],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與實境解謎"
		}
	},
	{
		id: "open-source-sharing",
		name: "開源理念分享",
		summary: "認識開源精神與學生社群的參與方式。",
		description: [
			"「為什麼我們要辦 SITCON？大概是為了吃宵夜時有人能揪一塊去」（Rifur，2013）",
			"",
			"對許多新接觸的參與者而言，資訊社群是個不可思議的地方：大家好像都有話直說、勇於表達、互相提攜，也很少有輩分或是上下關係的顧慮。在這場短講裡，我會盡量用簡單的方式帶過資訊社群文化發展的歷史、介紹社群成員彼此協作的方式，以及讓大家了解有哪些地方能找到學習資源、甚至進一步對你喜歡的專案做出有意義的貢獻。"
		],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/learning-wrap.jpg",
			alt: "開源理念分享"
		}
	},
	{
		id: "community-fair",
		name: "社群博覽會",
		summary: "群覽資訊社群，踏出啟程之路",
		description: [
			"資訊世界廣袤無垠，「獨學而無友，則孤陋寡聞」既然如此來探索不同社群看看吧！",
			"除 SITCON 學生計算機年會外，其實還有許多不同資訊社群，這些社群有著不同的取向，但都有相同對資訊的熱愛，我們精選了數個社群，從開放文化到 Python 再到資訊安全，在這裡，你可以認識一群「友」，使得資訊探索之路更加精彩。"
		],
		category: "活動",
		isInteractive: true
	},
	{
		id: "vision-cafe",
		name: "視界咖啡館",
		summary: "透過輕鬆對談的形式，在與前輩近距離交流中獲得啟發。",
		description: [
			"視界咖啡館參考自世界咖啡館（The World Café），在本次夏令營中，我們邀請到各領域及社群知名前輩，將傳統座談會形式改以聊天的樣貌呈現。",
			"",
			"學員可以與資訊界的名人們近距離互動，期望透過縮短講者與學員之間的距離，講者可以更針對學員給出建議，也鼓勵學員踴躍提問、參與，進而產生良好的雙向交流。"
		],
		category: "活動",
		isInteractive: true
	},
	{
		id: "sigs-ak",
		name: "？？？",
		summary: "神秘活動...",
		description: ["即將揭曉..."],
		category: "活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "晚間主題交流"
		}
	},
	{
		id: "closing",
		name: "閉幕",
		summary: "收起五天的故事，走向更大的資訊社群。",
		description: ["閉幕會把五天的故事收在一起，把視線帶向營隊之後，也把這段經驗連結到更大的資訊社群。"],
		category: "總結",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/closing.jpg",
			alt: "閉幕活動與學員合影現場"
		}
	},
	{
		id: "return-home",
		name: "賦歸",
		summary: "整理行李，帶著五天的收穫回到日常。",
		category: "總結"
	},
	{
		id: "lunch",
		name: "午餐",
		summary: "補充能量，準備下午的課程與活動。",
		category: "生活"
	},
	{
		id: "dinner",
		name: "晚餐",
		summary: "晚餐與休息時間。",
		category: "生活"
	},
	{
		id: "sleep",
		name: "睡覺",
		summary: "休息，準備迎接隔天行程。",
		category: "休息"
	}
];

export const scheduleDays: ScheduleDay[] = [
	{
		id: "day-one",
		title: ["第一日"],
		subtitle: "報到／破冰",
		type: "opening",
		blocks: [
			{ startSlot: "9:00", span: 2, eventId: "opening" },
			{ startSlot: "11:00", eventId: "icebreaking" },
			{ startSlot: "12:00", eventId: "lunch" },
			{ startSlot: "13:00", span: 3, eventId: "quest" },
			{ startSlot: "16:00", span: 2, eventId: "agent-battle" },
			{ startSlot: "18:00", eventId: "dinner" },
			{ startSlot: "19:00", span: 2, eventId: "lab-setup" },
			{ startSlot: "21:00", eventId: "sigs-ak" },
			{ startSlot: "睡覺", eventId: "sleep" }
		]
	},
	{
		id: "day-two",
		title: ["軟體工程", "主題日"],
		subtitle: "講師：Denny 黃一晉",
		type: "software",
		blocks: [
			{ startSlot: "9:00", span: 3, eventId: "software-main" },
			{ startSlot: "12:00", eventId: "lunch" },
			{ startSlot: "13:00", span: 6, eventId: "software-main" },
			{ startSlot: "19:00", eventId: "dinner" },
			{ startSlot: "20:00", eventId: "agentic-coding" },
			{ startSlot: "21:00", eventId: "sigs-ak" },
			{ startSlot: "睡覺", eventId: "sleep" }
		]
	},
	{
		id: "day-three",
		title: ["人工智慧", "主題日"],
		subtitle: "講師：Ak 郭鎮天、Harry 張祺煒",
		type: "artificial-intelligence",
		blocks: [
			{ startSlot: "9:00", span: 3, eventId: "ml-main" },
			{ startSlot: "12:00", eventId: "lunch" },
			{ startSlot: "13:00", span: 3, eventId: "ml-main" },
			{ startSlot: "16:00", span: 2, eventId: "heisenbug" },
			{ startSlot: "18:00", eventId: "dinner" },
			{ startSlot: "19:00", eventId: "ml-main" },
			{ startSlot: "20:00", span: 3, eventId: "sleep" }
		]
	},
	{
		id: "day-four",
		title: ["資訊安全", "主題日"],
		subtitle: "講師：Jasper 尤理衡",
		type: "security",
		blocks: [
			{ startSlot: "9:00", span: 3, eventId: "security-main" },
			{ startSlot: "12:00", eventId: "lunch" },
			{ startSlot: "13:00", span: 3, eventId: "security-main" },
			{ startSlot: "16:00", span: 3, eventId: "reality-puzzle" },
			{ startSlot: "19:00", eventId: "dinner" },
			{ startSlot: "20:00", eventId: "security-main" },
			{ startSlot: "21:00", eventId: "sigs-ak" },
			{ startSlot: "睡覺", eventId: "sleep" }
		]
	},
	{
		id: "day-five",
		title: ["第五日"],
		subtitle: "收尾",
		type: "closing",
		blocks: [
			{ startSlot: "9:00", eventId: "sleep" },
			{ startSlot: "10:00", eventId: "open-source-sharing" },
			{ startSlot: "11:00", span: 2, eventId: "community-fair" },
			{ startSlot: "13:00", span: 2, eventId: "vision-cafe" },
			{ startSlot: "15:00", span: 2, eventId: "closing" },
			{ startSlot: "17:00", span: 6, eventId: "return-home" }
		]
	}
];
