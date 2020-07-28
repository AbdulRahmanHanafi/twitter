let tweets = [];

function submit(userNameValue, tweetValue) {
    const username = document.getElementById('username-input');
    const tweet = document.getElementById('tweet-input');
    if (userNameValue && tweetValue) {
        tweets.unshift({
            username: userNameValue,
            tweet: tweetValue,
        });
    } else if (username.value.length && tweet.value.length) {
        tweets.unshift({
            username: username.value,
            tweet: tweet.value,
        });
    }
    createTweet(tweets);
    username.value = '';
    tweet.value = '';
    tweets = [];
}

function createTweet() {
    const div = document.getElementById('tweets');
    tweets.map((tweet) => {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');
        const username = document.createElement('span');
        const tweetText = document.createElement('span');
        username.classList.add('username');
        tweetText.classList.add('tweet-text');
        username.textContent = tweet.username;
        tweetText.textContent = tweet.tweet;
        const icons = document.createElement('div');
        icons.classList.add('icons');
        const like = document.createElement('img');
        like.id = 'likeButton';
        like.src = 'https://img.icons8.com/plasticine/100/000000/like--v2.png';
        const retweet = document.createElement('img');
        retweet.id = 'retweetButton';
        retweet.src = 'https://img.icons8.com/ultraviolet/40/000000/retweet.png';
        icons.appendChild(like);
        icons.appendChild(retweet);
        tweetDiv.appendChild(username);
        tweetDiv.appendChild(tweetText);
        tweetDiv.appendChild(icons);
        div.insertBefore(tweetDiv, div.childNodes[0]);
        like.addEventListener('click', function likeTweet() {
            tweetDiv.classList.toggle('liked')
        });

        retweet.addEventListener('click', function retweetTweet() {
            const childs = Array.from(retweet.parentElement.parentElement.childNodes);
            const userNameValue = childs[0].textContent;
            const tweetValue = childs[1].textContent;
            submit(userNameValue, tweetValue);
            // tweets.unshift({
            //     username: userNameValue,
            //     tweet: tweetValue,
            // });
        });
    });
}