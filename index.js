document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.getElementById("cursor");
    var b1 = document.getElementById("yes");
    var b2 = document.getElementById("no");
    var mutex = false; 
    var x, y; // mouse settings
    var followCursor = true; // Flag to control the following behavior

    // Function to update cursor position
    function updateCursorPosition(newX, newY) {
        cursor.style.left = newX + 'px';
        cursor.style.top = newY + 'px';
    }

    window.addEventListener("mousemove", function(e) {
        if (followCursor) {
            x = e.clientX;
            y = e.clientY;
            updateCursorPosition(x, y);
        }
    });

    window.addEventListener("mouseup", function(e) {
        var realElement = document.elementFromPoint(e.clientX, e.clientY);
        var customElement = document.elementFromPoint(x, y);

        if (realElement.id === 'no' && customElement.id === 'yes') {
            window.location.href = 'heart.html';
        }
        
    });

    

    b2.addEventListener('click', function() {
        // Temporarily disable cursor follow
        followCursor = false;

        // Move cursor to "Yes" button
        var buttonRect = b1.getBoundingClientRect();
        var centerX = buttonRect.left + (buttonRect.width / 2) - (cursor.offsetWidth / 2) + window.scrollX;
        var centerY = buttonRect.top + (buttonRect.height / 2) - (cursor.offsetHeight / 2) + window.scrollY;
        updateCursorPosition(centerX, centerY);

        // Optionally, apply any additional effects, such as enlarging the "Yes" button font as intended.
         var currentFontSize = parseInt(window.getComputedStyle(b1).fontSize);
         b1.style.fontSize = (currentFontSize + 10) + 'px';

        // After 0.2 seconds, return cursor to its current position and re-enable follow
        setTimeout(function() {
            followCursor = true;
            updateCursorPosition(x, y);
        }, 200); // 0.2 seconds delay
    });
});
