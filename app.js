console.log("JS");


const quotes = [
    "Your talent is God's gift to you. What you do with it is your gift back to God.",
    "Believe you can and you're halfway there.",
    "Do not wait; the time will never be 'just right.'",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Don't watch the clock; do what it does. Keep going.",
    "With the new day comes new strength and new thoughts.",
    "It always seems impossible until it's done.",
    "Quality is not an act, it is a habit.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don't happen, you create them.",
    "Try not to become a man of success. Rather become a man of value.",
    "The best way to predict the future is to invent it.",
    "Start where you are. Use what you have. Do what you can.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "A year from now you may wish you had started today.",
    "Do something today that your future self will thank you for.",
    "Small deeds done are better than great deeds planned.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Don't limit your challenges. Challenge your limits.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Wish it. Do it.",
    "Success doesn't just find you. You have to go out and get it.",
    "The harder the struggle, the more glorious the triumph.",
    "Don't stop when you're tired. Stop when you're done.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    "The secret of getting ahead is getting started.",
    "Believe in yourself and all that you are.",
    "You are capable of amazing things.",
    "Success is not in what you have, but who you are.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Do what you love, love what you do.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "Don't let yesterday take up too much of today.",
    "If it doesn't challenge you, it won't change you.",
    "Be so good they can't ignore you.",
    "Action is the foundational key to all success.",
    "Don't count the days, make the days count.",
    "Whatever you are, be a good one.",
    "The way to get started is to quit talking and begin doing.",
    "You are your only limit.",
    "Do what is right, not what is easy.",
    "Your limitation—it's only your imagination.",
    "Sometimes you win, sometimes you learn.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don't wait for the perfect moment. Take the moment and make it perfect.",
    "Great things are done by a series of small things brought together.",
    "Difficult roads often lead to beautiful destinations.",
    "The expert in anything was once a beginner.",
    "Work until your idols become your rivals.",
    "Hustle in silence and let your success make the noise.",
    "Don’t let fear decide your future.",
    "The best view comes after the hardest climb.",
    "If you want it, work for it.",
    "Failure is not the opposite of success; it’s part of success.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Energy and persistence conquer all things.",
    "Do one thing every day that scares you.",
    "Be fearless in the pursuit of what sets your soul on fire.",
    "It always seems impossible until it’s done.",
    "The journey of a thousand miles begins with one step.",
    "Don't let small minds convince you that your dreams are too big.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "I never dreamed about success. I worked for it.",
    "Opportunities are usually disguised as hard work, so most people don’t recognize them.",
    "Don't watch the clock; do what it does. Keep going.",
    "Do what you can with what you have, wherever you are.",
    "Success is not for the lazy.",
    "Don't be afraid to give up the good to go for the great.",
    "If opportunity doesn’t knock, build a door.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "The best revenge is massive success.",
    "To live a creative life, we must lose our fear of being wrong.",
    "Your life does not get better by chance, it gets better by change.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "Do not be embarrassed by your failures, learn from them and start again.",
    "The man who has confidence in himself gains the confidence of others.",
    "The only person you are destined to become is the person you decide to be.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Be humble. Be hungry. And always be the hardest worker in the room.",
    "Don’t wait. The time will never be just right.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "You don’t need to see the whole staircase, just take the first step.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Make your life a masterpiece; imagine no limitations on what you can be, have, or do.",
    "Push yourself because no one else is going to do it for you.",
    "Success is the progressive realization of a worthy goal or ideal.",
    "Your passion is waiting for your courage to catch up.",
    "Magic is believing in yourself, if you can do that, you can make anything happen.",
    "Don't let the fear of losing be greater than the excitement of winning.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    "You are never too old to set another goal or to dream a new dream.",
    "Great minds discuss ideas; small minds discuss events.",
    "Do what you can, with what you have, where you are.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "Happiness is not by chance, but by choice.",
    "Keep going. Be all in.",
    "Don't watch the clock; do what it does. Keep moving.",
    "A goal is a dream with a deadline.",
    "Act as if it were impossible to fail.",
    "Whatever you are, be a good one.",
    "The secret of success is to do the common things uncommonly well.",
    "The future depends on what you do today.",
    "Do not let making a living prevent you from making a life.",
    "Go the extra mile. It's never crowded.",
    "The best way out is always through.",
    "You miss 100% of the shots you don’t take.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "What you do today can improve all your tomorrows.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Turn your wounds into wisdom.",
    "Start each day with a positive thought.",
    "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "Dream big, work hard, stay focused.",
    "The harder you fall, the higher you bounce.",
    "Success is not in never falling, but in rising every time we fall.",
    "Be so good they can’t ignore you.",
    "You can’t cross the sea merely by standing and staring at the water.",
    "The best preparation for tomorrow is doing your best today.",
    "The road to success is always under construction.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "Don’t be afraid to give up the good to go for the great.",
    "With self-discipline most anything is possible.",
    "Don’t count the days; make the days count.",
    "Your life only gets better when you get better.",
    "Believe and act as if it were impossible to fail.",
    "Motivation gets you going, but discipline keeps you growing.",
    "Success isn’t overnight. It’s when every day you get a little better than the day before.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "You don’t have to be perfect to be amazing.",
    "Opportunities don’t happen. You create them.",
    "When you feel like quitting, think about why you started.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do.",
    "Do something today that your future self will thank you for.",
    "You are stronger than you think.",
    "Start where you are. Use what you have. Do what you can.",
    "Little by little, a little becomes a lot.",
    "Success is what happens after you have survived all your mistakes.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Nothing will work unless you do.",
    "Do not wait for leaders; do it alone, person to person.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Action is the foundational key to all success.",
    "Don’t let yesterday take up too much of today.",
    "Everything you’ve ever wanted is on the other side of fear.",
    "Success is not in what you have, but who you are.",
    "Don’t be pushed around by the fears in your mind.",
    "Do not go where the path may lead; go instead where there is no path and leave a trail.",
    "Success is a journey, not a destination.",
    "The best dreams happen when you are awake.",
    "Do what you love and the money will follow.",
    "Don’t be afraid to fail. Be afraid not to try.",
    "The secret of getting ahead is getting started.",
    "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",
    "Work hard in silence, let success make the noise.",
    "Your future is created by what you do today, not tomorrow.",
    "Success is not the key to happiness. Happiness is the key to success."
];

const quoteText = document.querySelector(".quote-text");
const quoteDate = document.querySelector(".quote-date p");
const newQuoteBtn = document.querySelector(".new-quote-btn");

function getTodayString() {
    const today = new Date();
    return today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
}

function getMonthString() {
    const today = new Date();
    return today.getFullYear() + "-" + (today.getMonth() + 1);
}

let storedData = JSON.parse(localStorage.getItem("monthlyQuotes")) || {};
const todayStr = getTodayString();
const monthStr = getMonthString();

if (!storedData[monthStr]) {
    storedData[monthStr] = {}; 
}

function pickQuotesForDay(dayStr) {
    if (!storedData[monthStr][dayStr]) {
        storedData[monthStr][dayStr] = [];
    }

    let todayQuotes = storedData[monthStr][dayStr];

    while (todayQuotes.length < 5) {
        const unusedQuotes = quotes.filter(q => !todayQuotes.includes(q));
        if (unusedQuotes.length === 0) break; 
        const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
        todayQuotes.push(unusedQuotes[randomIndex]);
    }

    storedData[monthStr][dayStr] = todayQuotes;
    localStorage.setItem("monthlyQuotes", JSON.stringify(storedData));
}

pickQuotesForDay(todayStr);

function displayQuote(dayStr) {
    const dayQuotes = storedData[monthStr][dayStr];
    const lastQuote = dayQuotes[dayQuotes.length - 1] || "No quote available";
    quoteText.textContent = lastQuote;
    quoteDate.textContent = dayStr;
}

function newQuote() {
    const dayQuotes = storedData[monthStr][todayStr];

    if (dayQuotes.length >= 5) {
        showPreviousDayQuotes();
    }

    const unusedQuotes = quotes.filter(q => !dayQuotes.includes(q));
    if (unusedQuotes.length === 0) {
        alert("All quotes for this month are used!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * unusedQuotes.length);
    const selectedQuote = unusedQuotes[randomIndex];

    dayQuotes.push(selectedQuote);
    storedData[monthStr][todayStr] = dayQuotes;
    localStorage.setItem("monthlyQuotes", JSON.stringify(storedData));

    quoteText.textContent = selectedQuote;
    quoteDate.textContent = todayStr;
}

displayQuote(todayStr);

function showPreviousDayQuotes() {
    const days = Object.keys(storedData[monthStr]).sort();
    if (days.length > 1) {
        const prevDay = days[days.length - 2];
        const prevQuotes = storedData[monthStr][prevDay];
        quoteText.textContent = prevQuotes.join(" | "); 
        quoteDate.textContent = prevDay;
    }
}

newQuoteBtn.addEventListener("click", newQuote);
