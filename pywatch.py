#!/usr/bin/python3


#Usage: ./pywatch.py <path> <extensions> <exec> [-d] &
# <extensions> = ".py|.js|etc..."

# -d is optional argument which prints the files that changed
# path is location of the dir to monitor
# exec is the command you want to run when something changes
# extensions is the extension types you want to monitor

####
#Example 1 for compiling latex:
#./pywatch.py src "tex" "make" -d
#
#Example 2:
###./watch.sh content:
#     #!/bin/bash
#     make
###
#
#./pywatch src ".py|.cpp" ./watch.sh &
####

# Only dependency for this script is pyinotify. To install it
# run "sudo pip install pyinotify" (and if you don't want to
# install it globally, it's recommended to use python
# virtual environment (http://docs.python-guide.org/en/latest/dev/virtualenvs/)

# Explanation:
# This script recursively watches for changes in <path>
# of files with one of the <extensions> and automatically
# triggers exec whenever a file changes

# TODO:
#  -possibly exclude .git directory with exclude_filter
#  -add a timer and don't kill gunicorn more than once every second
#  -Issue: when modifying code with vim, on_event is called twice
#  -Check what happens when a bunch of files get changed at the same time, for example when installing new app.

import time, sys, pyinotify, os
#import subprocess, sh

debug = False

if len(sys.argv) != 4:
   if len(sys.argv) == 5 and sys.argv[4] == '-d':
      debug = True
   else:
      print('%s <PATH_TO_MONITOR> <EXTENSION> <EXEC> [-d] &' % sys.argv[0])
      exit()

path = sys.argv[1]
exts_str = sys.argv[2]
exts = exts_str.split('|')
cmd = sys.argv[3]

wm = pyinotify.WatchManager()
notifier = pyinotify.Notifier(wm)

def on_event(arg):
   name = arg.pathname
   #print('event %s' % name)
   file_ext = name.split('.')[-1]
   run = False

   for ext in exts:
      if file_ext in (ext):
         run = True

   if run:
      if debug:
         print('file changed: %s' % name)
      #subprocess.call(['make', 'test'])
      os.system(cmd)

   #if ext in ('py', 'html', 'js', 'css'):
   #   subprocess.call(['make', 'first'])
   #   subprocess.call(['make', 'second'])

#watch_mask = pyinotify.ALL_EVENTS
watch_mask = pyinotify.IN_CREATE | pyinotify.IN_MODIFY
#exclude_filter=not_py_file (this can be used to exclude .git directory)
wm.add_watch(path, watch_mask, proc_fun=on_event, rec=True, auto_add=True, quiet=False)

notifier.loop()

