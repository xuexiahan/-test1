// 后期接数据库时，把 USE_BACKEND 改成 true，并把地址改成后端接口地址。
const USE_BACKEND = false;
const API_BASE_URL = "http://localhost:8080/api";

const selected = new Map();
const summaryList = document.querySelector("#summaryList");
const totalPrice = document.querySelector("#totalPrice");
const toast = document.querySelector("#toast");

async function loadProducts() {
  if (!USE_BACKEND) {
    return bookingData;
  }

  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("商品数据加载失败");
  }
  return response.json();
}

async function submitOrder(orderPayload) {
  if (!USE_BACKEND) {
    return {
      success: true,
      orderId: `MOCK-${Date.now()}`
    };
  }

  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderPayload)
  });

  if (!response.ok) {
    throw new Error("订单提交失败");
  }
  return response.json();
}

function renderBookingItems(products) {
  document.querySelectorAll("[data-list]").forEach((list) => {
    const key = list.dataset.list;
    const items = products[key] || [];

    list.innerHTML = items.map((item) => `
      <button
        class="booking-item"
        data-id="${item.id}"
        data-name="${item.name}"
        data-price="${item.price}"
        data-type="${item.type}"
        data-category="${item.category}"
      >
        <span>
          <strong>${item.name}</strong>
          <small>${item.detail}</small>
        </span>
        <b>¥${item.price}</b>
      </button>
    `).join("");
  });
}

function renderSummary() {
  const items = Array.from(selected.values());
  summaryList.innerHTML = "";

  if (items.length === 0) {
    summaryList.innerHTML = "<p>选择下方项目后，这里会生成预定清单。</p>";
    totalPrice.textContent = "¥0";
    return;
  }

  let total = 0;
  items.forEach((item) => {
    total += Number(item.price);
    const row = document.createElement("div");
    row.className = "summary-item";
    row.innerHTML = `
      <span>
        <strong>${item.name}</strong>
        <small>${item.type}</small>
      </span>
      <b>¥${item.price}</b>
    `;
    summaryList.appendChild(row);
  });

  totalPrice.textContent = `¥${total}`;
}

function buildOrderPayload() {
  const items = Array.from(selected.values());
  const total = items.reduce((sum, item) => sum + Number(item.price), 0);

  return {
    destination: document.querySelector("#topSearch input[type='text']").value,
    travelDate: document.querySelector("#topSearch input[type='date']").value,
    peopleCount: document.querySelector("#topSearch select").value,
    totalPrice: total,
    items: items.map((item) => ({
      productId: item.id,
      category: item.category,
      name: item.name,
      price: Number(item.price)
    }))
  };
}

function bindBookingEvents() {
  document.querySelectorAll(".booking-item").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;

      if (selected.has(id)) {
        selected.delete(id);
        button.classList.remove("selected");
      } else {
        selected.set(id, {
          id,
          name: button.dataset.name,
          price: Number(button.dataset.price),
          type: button.dataset.type,
          category: button.dataset.category
        });
        button.classList.add("selected");
      }

      toast.classList.remove("show");
      renderSummary();
    });
  });
}

document.querySelector("#confirmOrder").addEventListener("click", async () => {
  if (selected.size === 0) {
    toast.textContent = "请先选择至少一个预定项目";
    toast.classList.add("show");
    return;
  }

  try {
    const result = await submitOrder(buildOrderPayload());
    toast.textContent = `订单已提交：${result.orderId || "提交成功"}`;
  } catch (error) {
    toast.textContent = error.message;
  }
  toast.classList.add("show");
});

document.querySelector("#topSearch").addEventListener("submit", (event) => {
  event.preventDefault();
  toast.textContent = "已根据目的地刷新推荐";
  toast.classList.add("show");
});

async function initPage() {
  try {
    const products = await loadProducts();
    renderBookingItems(products);
    bindBookingEvents();
  } catch (error) {
    toast.textContent = error.message;
    toast.classList.add("show");
  }
}

initPage();
