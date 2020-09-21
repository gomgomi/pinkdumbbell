package pinkdumbbell.youtubeTrend.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import pinkdumbbell.youtubeTrend.domain.Contents;
import pinkdumbbell.youtubeTrend.domain.VideoDataRepository;
import pinkdumbbell.youtubeTrend.domain.VideoData;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

public class jdbcVideoRepository implements VideoDataRepository {
    private final JdbcTemplate jdbcTemplate;
    public jdbcVideoRepository(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<VideoData> findVideoID() {
        return jdbcTemplate.query("select * from videodata", memberRowMapper());
    }

    @Override
    public List<VideoData> findVideoContents(Contents contents)  {
        final int numberContentPage = 10;   // 상수를 별도로 관리하는 파일을 생성 해야 할까 ?
        String date = contents.getDate();
        int page = contents.getPage();
        int startCountContent = (page - 1) * numberContentPage;
        int endCountContent = page * numberContentPage;

        System.out.println("startCountContent : " + startCountContent);
        System.out.println("endCountContent : " + endCountContent);

        String period = contents.getPeriod();
        String[] splitPeriod = new String[1];

        System.out.println("period of jdbcVideoRepository :" + period);

        if("Weekly".equalsIgnoreCase(period)) {
            splitPeriod = date.split("~");
        }

        String sql = "SELECT * " +
                "FROM (" +
                "SELECT *, ROW_NUMBER() OVER (ORDER BY DailyViewCount DESC) AS DailyViewRowNumber " +
                "FROM videodata WHERE InsertDT = ?) AS videoDataRank " +
                "WHERE videoDataRank.DailyViewRowNumber > ? AND videoDataRank.DailyViewRowNumber <= ?";

        String periodSql = "SELECT * " +
                        "FROM (" +
                        "SELECT *, ROW_NUMBER() OVER (ORDER BY DailyViewCount DESC) AS DailyViewRowNumber " +
                        "FROM videodata WHERE InsertDT > ? AND InsertDT < ?) AS videoDataRank " +
                        "WHERE videoDataRank.DailyViewRowNumber > ? AND videoDataRank.DailyViewRowNumber <= ?";

        if("Daily".equalsIgnoreCase(period)) {
            return jdbcTemplate.query(sql, new Object[]{date, startCountContent, endCountContent}, memberRowMapper());
        } else {
            return jdbcTemplate.query(periodSql, new Object[]{splitPeriod[0], splitPeriod[1], startCountContent, endCountContent}, memberRowMapper());
        }
    }

    @Override
    public List<VideoData> findVideoCategoryId(Contents contents) {
        final int numberContentPage = 10;   // 상수를 별도로 관리하는 파일을 생성 해야 할까 ?
        int categoryId = contents.getCategoryId();
        String date = contents.getDate();
        int page = contents.getPage();
        int startCountContent = (page - 1) * numberContentPage;
        int endCountContent = page * numberContentPage;

        System.out.println("startCountContent : " + startCountContent);
        System.out.println("endCountContent : " + endCountContent);

        String period = contents.getPeriod();
        String[] splitPeriod = new String[1];

        if(!period.isEmpty() || (period.length() > 2)) {
            splitPeriod = period.split("~");
        }

        String sql = "SELECT * " +
                "FROM (" +
                "SELECT *, ROW_NUMBER() OVER (ORDER BY DailyViewCount DESC) AS DailyViewRowNumber " +
                "FROM videodata WHERE InsertDT = ?) AS videoDataRank " +
                "WHERE videoDataRank.DailyViewRowNumber > ? AND videoDataRank.DailyViewRowNumber <= ? AND categoryId = ?";

        String periodSql = "SELECT * " +
                "FROM (" +
                "SELECT *, ROW_NUMBER() OVER (ORDER BY DailyViewCount DESC) AS DailyViewRowNumber " +
                "FROM videodata WHERE InsertDT > ? AND InsertDT < ?) AS videoDataRank " +
                "WHERE videoDataRank.DailyViewRowNumber > ? AND videoDataRank.DailyViewRowNumber <= ? AND categoryId = ?";

        if(period.isEmpty() || (period.length() < 2)) {
            return jdbcTemplate.query(sql, new Object[]{date, startCountContent, endCountContent, categoryId}, memberRowMapper());
        } else {
            return jdbcTemplate.query(periodSql, new Object[]{splitPeriod[0], splitPeriod[1], startCountContent, endCountContent, categoryId}, memberRowMapper());
        }
    }

    private RowMapper<VideoData> memberRowMapper() {
        return (rs, rowNum) -> {
            VideoData videoData = new VideoData();
            videoData.setChannelID(rs.getString("channelID"));
            videoData.setPublishedAT(rs.getString("publishedAT"));
            videoData.setTitle(rs.getString("title"));
            videoData.setTitle(rs.getString("videoID"));
            videoData.setChannelTitle(rs.getString("channelTitle"));
            videoData.setThumbnails(rs.getString("thumbnails"));
            videoData.setViewCount(rs.getLong("viewCount"));
            videoData.setDailyViewCount(rs.getInt("dailyViewCount"));

            return videoData;
        };
    }
}