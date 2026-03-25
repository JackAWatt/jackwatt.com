# terminal

* terminal with logging

`wscat -c ws://$IP:$port | Tee-Object -FilePath readings.txt`

* Example if `IP` is `10.190.166.47` and `port` is `81`

`wscat -c ws://10.190.166.47:81 | Tee-Object -FilePath readings.txt`

