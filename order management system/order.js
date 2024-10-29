// Sample order data
const orders = [
    { id: 1011, customer: "Indrakumar", status: "Pending", items: ["Laptop", "Phone"],amount:60000 },
    { id: 2022, customer: "Veeresh Sheeri", status: "Shipped", items: ["Tablet", "Headphones"],amount:50000 },
    { id: 3033, customer: "Tavisali M D", status: "Delivered", items: ["Camera", "Tripod"],amount:100000 },
    { id: 4044, customer: "Suneel Gaddi", status: "Cancled", items: ["Shoes", "SportsKit"],amount:5000 },
    
  ];
  
  // Function to load orders into the table
  function loadOrders() {
    const tableBody = document.querySelector("#orders-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows
    orders.forEach((order) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customer}</td>
        <td>${order.status}</td>
         <td>${order.amount}</td>
        <td><button onclick="viewOrder(${order.id})">View</button></td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  // Function to display order details
  function viewOrder(orderId) {
    const order = orders.find(o => o.id === orderId);
    const detailsDiv = document.getElementById("details-content");
  
    detailsDiv.innerHTML = `
      <p><strong>Order ID:</strong> ${order.id}</p>
      <p><strong>Customer:</strong> ${order.customer}</p>
      <p><strong>Status:</strong> ${order.status}</p>
      <p><strong>Items:</strong> ${order.items.join(", ")}</p>
      <p><strong>Amount:</strong> ${order.amount}</p>
      <button onclick="updateStatus(${order.id})">Update Status</button>
    `;
  }
  
  // Function to update order status
  function updateStatus(orderId) {
    const order = orders.find(o => o.id === orderId);
    const newStatus = prompt("Enter new status (Pending, Shipped, Delivered,Cancled):", order.status);
    if (newStatus) {
      order.status = newStatus;
      loadOrders();  // Reload orders to reflect updated status
      viewOrder(orderId);  // Refresh the displayed order details
    }
  }
  
  // Load orders on page load
  document.addEventListener("DOMContentLoaded", loadOrders);