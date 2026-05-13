export type ScheduleDayType = "opening" | "software" | "artificial-intelligence" | "security" | "closing";

export const scheduleSlots = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "睡覺"] as const;

export type ScheduleSlot = (typeof scheduleSlots)[number];

export type ScheduleEventCategory = "啟程" | "主線課程" | "社群活動" | "生活" | "休息" | "總結";

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
	title: string;
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
	description?: string;
	image?: {
		src: string;
		alt: string;
	};
}

export const scheduleMeta: ScheduleMeta = {
	title: "活動課表",
	description: "SITCON Camp 2026 將圍繞軟體工程、人工智慧與資訊安全三大主線展開，並穿插交流、實作與社群活動。"
};

export const scheduleEvents: ScheduleEvent[] = [
	{
		id: "opening",
		name: "開幕",
		summary: "認識營隊節奏與接下來五天的學習安排。",
		description: "從開幕開始進入 SITCON Camp 的五天四夜。學員會理解營隊主軸、活動規則與接下來的課程安排，準備好和小隊夥伴一起展開學習與實作。",
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
		description: "破冰不只是為了記住名字，而是讓大家有機會交換想法、發現彼此的好奇心。透過輕鬆的互動與任務，學員會認識小隊夥伴，熟悉營隊氣氛。",
		category: "社群活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/icebreaking.jpg",
			alt: "學員在破冰活動中互動交流"
		}
	},
	{
		id: "quest",
		name: "闖關",
		summary: "以任務形式熟悉營隊環境與小隊合作。",
		description: "透過闖關任務讓學員更快熟悉場地、隊友與營隊節奏，也在遊戲中練習溝通、分工與合作。",
		category: "社群活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與營隊活動"
		}
	},
	{
		id: "agent-battle",
		name: "Agent 對戰活動",
		summary: "讓你的 agent 和其他人的成果一較高下。",
		description: "把課程中的想法轉成可互動的 agent，並在活動中觀察不同策略如何面對同一個挑戰。",
		category: "社群活動",
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
		description: "協助學員完成電腦教室環境與工具設定，讓後續主線課程能順利進行。",
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
		description: "軟體工程主題日的核心，是讓學員了解一個專案不只是把程式寫出來，而是要能被理解、被協作、被維護，並在需求變動時繼續前進。",
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
		description: "人工智慧與機器學習主題課程會帶學員理解模型不是魔法，而是和資料品質、問題定義與驗證方法緊密相關的工具。",
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
		description: "資訊安全主題日將帶學員靠近資安領域的思考方式。資安不只是找到漏洞或解出題目，更是在理解系統如何運作，以及攻擊者與防禦者會如何看待同一個問題。",
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/security-main.jpg",
			alt: "資訊安全主題日課程現場"
		}
	},
	{
		id: "agentic-coding",
		name: "AI Coding 交流",
		summary: "Denny 分享如何把 AI agent 放進實際開發流程。",
		description: "從使用經驗出發，交流如何讓 AI agent 協助開發、學習與實作，也討論工具帶來的效率、限制與判斷方式。",
		category: "主線課程",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/software-main.jpg",
			alt: "Agentic Coding 經驗交流"
		}
	},
	{
		id: "heisenbug",
		name: "海森堡 Bug",
		summary: "倫敦鐵喬帶來的除錯與思考挑戰。",
		description: "透過海森堡 Bug 主題活動，學員會在不穩定、難重現的情境中練習觀察、推理與除錯策略。",
		category: "社群活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/night-special.jpg",
			alt: "學員參與除錯挑戰"
		}
	},
	{
		id: "reality-puzzle",
		name: "實境解謎",
		summary: "把線索、觀察與合作串成解題流程。",
		description: "實境解謎將學員帶進跨場景的任務挑戰，透過線索整理、團隊溝通與推理，一起完成解謎目標。",
		category: "社群活動",
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
		description: "從開源理念出發，理解開放協作如何影響技術社群，也看見學生可以如何參與、貢獻與延續自己的學習。",
		category: "社群活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/learning-wrap.jpg",
			alt: "開源理念分享"
		}
	},
	{
		id: "community-cafe",
		name: "社群交流與視界咖啡館",
		summary: "和講者、隊輔與夥伴交流，把五天經驗整理成下一步。",
		description: "最後一天保留時間讓學員交流、提問與整理經驗，在視界咖啡館中看見更多資訊社群的入口。",
		category: "社群活動",
		isInteractive: true,
		image: {
			src: "/2026/images/schedule/learning-wrap.jpg",
			alt: "學員交流與分享"
		}
	},
	{
		id: "sigs-ak",
		name: "SIGs",
		summary: "Ak 帶領的晚間主題交流。",
		description: "SIGs 是晚間的小型主題交流時間，讓學員能針對有興趣的題目延伸討論，也認識更多不同背景的夥伴。",
		category: "社群活動",
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
		description: "閉幕會把五天的故事收在一起，把視線帶向營隊之後，也把這段經驗連結到更大的資訊社群。",
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
		title: "第一日",
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
		title: "軟體工程主題",
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
		title: "人工智慧主題",
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
		title: "資訊安全主題",
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
		title: "第五日",
		subtitle: "收尾",
		type: "closing",
		blocks: [
			{ startSlot: "9:00", eventId: "sleep" },
			{ startSlot: "10:00", eventId: "open-source-sharing" },
			{ startSlot: "11:00", span: 4, eventId: "community-cafe" },
			{ startSlot: "15:00", span: 2, eventId: "closing" },
			{ startSlot: "17:00", span: 6, eventId: "return-home" }
		]
	}
];
