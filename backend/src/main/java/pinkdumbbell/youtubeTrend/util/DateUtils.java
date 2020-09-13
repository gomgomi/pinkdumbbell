package pinkdumbbell.youtubeTrend.util;

import java.util.Calendar;
import java.util.Date;

public class DateUtils {
    public static Date getFirstDateOfWeek(Date date){
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
        cal.add(Calendar.DATE, (dayOfWeek-1)*-1);

        return cal.getTime();
    }

    public static Date getLastDateOfWeek(Date date){
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);

        int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
        cal.add(Calendar.DATE, 7-dayOfWeek);

        return cal.getTime();
    }
}
