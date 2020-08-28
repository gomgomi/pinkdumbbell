package pinkdumbbell.youtubeTrend.repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import pinkdumbbell.youtubeTrend.domain.VideoDataRepository;
import pinkdumbbell.youtubeTrend.domain.VideoData;

import javax.sql.DataSource;
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

    private RowMapper<VideoData> memberRowMapper() {
        return (rs, rowNum) -> {
            VideoData videoData = new VideoData();
            videoData.setVideoID(rs.getString("videoID"));
            videoData.setChannelID(rs.getString("channelID"));
            videoData.setInsertDT(rs.getDate("insertDT"));
            videoData.setPublishedAT(rs.getString("publishedAT"));
            videoData.setTitle(rs.getString("title"));
            videoData.setDescription(rs.getString("description"));
            videoData.setChannelTitle(rs.getString("channelTitle"));
            videoData.setThumbnails(rs.getString("thumbnails"));
            videoData.setViewCount(rs.getLong("viewCount"));
            videoData.setZeroViewCount(rs.getLong("zeroViewCount"));
            videoData.setDailyViewCount(rs.getInt("dailyViewCount"));
            videoData.setLikeCount(rs.getInt("likeCount"));
            videoData.setDislikeCount(rs.getInt("dislikeCount"));
            videoData.setCommentCount(rs.getInt("commentCount"));
            videoData.setURL(rs.getString("URL"));
            videoData.setCategoryID(rs.getInt("categoryID"));
            videoData.setUpdateDT(rs.getDate("updateDT"));

            return videoData;
        };
    }

}
