layout('us');
typingSpeed(0, 5);

press('GUI r');

var num_windows = 2;
delay(500);
type('powershell -NoP -W 1 -Noni -ep Bypass spps -Name \\"brave\\"; ' + 'iex 1..' + num_windows + ' | foreach{saps brave.exe -ArgumentList \\"--window-size=800,600\\", \\"--new-window\\", \\"https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=43s\\"}\n');