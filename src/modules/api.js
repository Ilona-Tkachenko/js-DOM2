// export const images = [
//         { "id": "0", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/yC-Yzbqy7PY", "download_url": "https://picsum.photos/id/0/5000/3333" },
//         { "id": "1", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/LNRyGwIJr5c", "download_url": "https://picsum.photos/id/1/5000/3333" },
//         { "id": "2", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/N7XodRrbzS0", "download_url": "https://picsum.photos/id/2/5000/3333" },
//         { "id": "3", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/Dl6jeyfihLk", "download_url": "https://picsum.photos/id/3/5000/3333" },
//         { "id": "4", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/y83Je1OC6Wc", "download_url": "https://picsum.photos/id/4/5000/3333" },
//         { "id": "5", "author": "Alejandro Escamilla", "width": 5000, "height": 3334, "url": "https://unsplash.com/photos/LF8gK8-HGSg", "download_url": "https://picsum.photos/id/5/5000/3334" },
//         { "id": "6", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/tAKXap853rY", "download_url": "https://picsum.photos/id/6/5000/3333" },
//         { "id": "7", "author": "Alejandro Escamilla", "width": 4728, "height": 3168, "url": "https://unsplash.com/photos/BbQLHCpVUqA", "download_url": "https://picsum.photos/id/7/4728/3168" },
//         { "id": "8", "author": "Alejandro Escamilla", "width": 5000, "height": 3333, "url": "https://unsplash.com/photos/xII7efH1G6o", "download_url": "https://picsum.photos/id/8/5000/3333" },
//         { "id": "9", "author": "Alejandro Escamilla", "width": 5000, "height": 3269, "url": "https://unsplash.com/photos/ABDTiLqDhJA", "download_url": "https://picsum.photos/id/9/5000/3269" },
//         { "id": "10", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/6J--NXulQCs", "download_url": "https://picsum.photos/id/10/2500/1667" },
//         { "id": "11", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Cm7oKel-X2Q", "download_url": "https://picsum.photos/id/11/2500/1667" },
//         { "id": "12", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/I_9ILwtsl_k", "download_url": "https://picsum.photos/id/12/2500/1667" },
//         { "id": "13", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/3MtiSMdnoCo", "download_url": "https://picsum.photos/id/13/2500/1667" },
//         { "id": "14", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/IQ1kOQTJrOQ", "download_url": "https://picsum.photos/id/14/2500/1667" },
//         { "id": "15", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/NYDo21ssGao", "download_url": "https://picsum.photos/id/15/2500/1667" },
//         { "id": "16", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/gkT4FfgHO5o", "download_url": "https://picsum.photos/id/16/2500/1667" },
//         { "id": "17", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Ven2CV8IJ5A", "download_url": "https://picsum.photos/id/17/2500/1667" },
//         { "id": "18", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Ps2n0rShqaM", "download_url": "https://picsum.photos/id/18/2500/1667" },
//         { "id": "19", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/P7Lh0usGcuk", "download_url": "https://picsum.photos/id/19/2500/1667" },
//         { "id": "20", "author": "Aleks Dorohovich", "width": 3670, "height": 2462, "url": "https://unsplash.com/photos/nJdwUHmaY8A", "download_url": "https://picsum.photos/id/20/3670/2462" }
//     ];

export async function fetchImages() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
        if (!response.ok) {
            throw new Error(`HTTP помилка! Статус: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Помилка завантаження зображень:', error);
        return [];
    }
}
