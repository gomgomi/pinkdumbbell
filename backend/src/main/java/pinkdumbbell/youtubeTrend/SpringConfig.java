package pinkdumbbell.youtubeTrend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import pinkdumbbell.youtubeTrend.domain.VideoDataRepository;
import pinkdumbbell.youtubeTrend.repository.jdbcVideoRepository;
import pinkdumbbell.youtubeTrend.service.VideoDataService;

import javax.sql.DataSource;

@Configuration
public class SpringConfig {

    private final DataSource dataSource;

    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    @Bean
    public VideoDataService videoDataService() {
        return new VideoDataService(videoDataRepository());
    }
    @Bean
    public VideoDataRepository videoDataRepository() {
        return new jdbcVideoRepository(dataSource);
    }
}
