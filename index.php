<?php
function calculateArithmetic($x, $y) {
    if ($x == "LOW" && $y == "LOW") {
        return "LOW";
    } elseif ($x == "Low" && $y == "Medium") {
        return "low";
    } elseif ($x == "Medium" && $y == "Low") {
        return "medium";
    } elseif ($x == "Medium" && $y == "Medium") {
        return "Medium";
    } elseif ($x == "Medium" && $y == "High") {
        return "medium";
    } elseif ($x == "High" && $y == "Medium") {
        return "medium";
    } elseif ($x == "High" && $y == "High") {
        return "medium";
    } elseif ($x == "Low" && $y == "High") {
        return "low";
    } elseif ($x == "High" && $y == "Low") {
        return "high";
    }
}

$x = "Medium";
$y = "Low";
$result = calculateArithmetic($x, $y);
echo $result; // Output: medium

// $aValues = range(a1, a800); 
// $x = array_sum($aValues) / count($aValues);

// $bValues = range(b1, b50); 
// $y = array_sum($bValues) / count($bValues);

// echo "Mean of A (x): " . $x . "<br>";
// echo "Mean of B (y): " . $y;

?>
