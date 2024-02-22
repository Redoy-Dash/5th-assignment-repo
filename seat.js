// function 1

// Track selected seats
let selectedSeats = [];
const maxSeats = 4; //optional

// Add click event listeners to seat buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const seatId = button.id;

        // Check if the seat is already selected
        if (selectedSeats.includes(seatId)) {
            // Deselect the seat
            selectedSeats = selectedSeats.filter(seat => seat !== seatId);
            button.style.backgroundColor = '#caecec';
        }
        else {
            // Check if the maximum of 4 seats is reached
            if (selectedSeats.length < 4) {
                // Select the seat
                selectedSeats.push(seatId);
                button.style.backgroundColor = 'green';
                // You can use any color for selected seats
            }
            else {
                alert('You can select a maximum of 4 seats.');
            }
        }

        // Log selected seats (you can modify this part based on your needs)
        console.log('Selected Seats:', selectedSeats);

        updateSelectedSeats();
        calculateTotalPrice();
    });
});

function updateSelectedSeats() {
    const selectedSeatsCount = selectedSeats.length;
    const remainingSeats = maxSeats - selectedSeatsCount;

    document.getElementById('selectedSeatsCount').innerText = selectedSeatsCount;
    document.getElementById('remainingSeats').innerText = remainingSeats;
    document.getElementById('selectedSeats').innerText = selectedSeats.join(', ');
}

function calculateTotalPrice() {
    // ... (existing calculation code)
}

