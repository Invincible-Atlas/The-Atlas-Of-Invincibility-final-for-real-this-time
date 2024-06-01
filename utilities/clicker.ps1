$buttonHex = Read-Host "Button to press(full list at https://tinyurl.com/mf6map8u, enter what is listed in the 'value' column)"
$buttonDec = [uint32] $buttonHex
[int] $speed = Read-Host "Click speed (in Hz/CPS)"
$delay = Read-Host "Delay before clicking starts (in ms)"
$clickNum = Read-Host "Number of Clicks (put a value that is less than 0 for infinity)"
$ws = New-Object -com wscript.shell
if ($clickNum -lt 0) {
    Write-Host "Warning: the value you have entered is less than zero. This means that the program will continue infinitly. There is no global keyboard shortcut to stop this program; you need to manually close the window to stop this program. Proceed at your own risk."
    Write-Host "If you want to stop this program and enter a different value, use the shortcut 'ctrl+c' in the command line or close the window."
    Pause
}
$count=0
$sleep = 1000/$speed

Start-Sleep -Milliseconds $delay

while ($count -ne $clickNum ) {
    # Write-Host $count
    Start-Sleep -Milliseconds $sleep
    $ws.sendKeys([char]$buttonDec) 
    $count++  
}