const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
];

const itemsPerPage = 5;
let currentPage = 1;

function renderPagination() {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const pageItems = items.slice(startIndex, endIndex);

    const itemList = document.getElementById("item-list");
    itemList.innerHTML = "";

    pageItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        itemList.appendChild(li);
    });

    const info = document.getElementById("page-info")
    info.textContent = `Page ${currentPage} of ${totalPages}`;

    const prevBtn = document.getElementById("prev-btn")
    prevBtn.disabled = currentPage === 1;
    const nextBtn = document.getElementById("next-btn")
    nextBtn.disabled = currentPage === totalPages;
}

document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPagination();
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination();
    }
});

renderPagination();
