//os module is used to retrieve information from underlying os and computer prgrm run on and iteract with it 
const os=require('os');

os.arch()
/* used to return strings the underlying architecture */

os.cpus()
/* return information on the cpus available on ur system */

os.endianness()
/* return BE or LE depending if nodejs is compiled with them */

os.freemem()
/* return the number of bytes that represents the free memory in the system */

os.homedir()
/* return the path to the home directory of the current user*/

os.hostname()
/*return hostname */

os.loadavg()
/*return the calculation made by os on load avg */

os.platform()
/*return the platform that ndejs was compiled for */

os.release()
/* return string that identifies os release number */

os.tmpdir()
/*return the path to the assigned temp folder */
os.totalmem()
/*return the number of btes that represent the total memory available in the system */

os.type()
/* return the os types ex-linux, darwin macose */
