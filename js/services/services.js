const postData = async (url, data) => {
    const res = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
    });
    return await res.json();
};

async function getResourse(url) {
    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
}

export {postData};
export {getResourse};